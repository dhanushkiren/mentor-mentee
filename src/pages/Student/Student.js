import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Student.css';
import { ApiConfig } from '../../components/ApiConfig';
// import axios from 'axios'; // Import Axios for making HTTP requests

const Student = () => {
    const [studentData, setStudentData] = useState([]);
    const id = localStorage.getItem('id');

    useEffect(() => {
        getData();
      });

      async function getData(){
        try{
        const response = await fetch(ApiConfig.mentorStudentList, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mentorUid : id
            }),
          });
          if (response.ok) {
            const data = await response.json();
            setStudentData(data);
          }
      }catch (error) {
        console.error('Error during login:', error);
        // seterrorMessage('Something went wrong. Please try again.');
      }
    }
    console.log("showing data :",studentData.length);

    // const handleDelete = (id) => {
    //     // Implement your delete logic here
    // };

    const columns = [
        // { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'department', headerName: 'Department', flex: 1 },
        { field: 'year', headerName: 'Year', flex: 1 },
        { field: 'achievements', headerName: 'Achievements (DONE or NOT)', flex: 1 },
        {
            // Add your delete button or other actions here
            // You can use handleDelete to handle deletion
        },
    ];

    return (
        <div className="student">
            <h2>Student List</h2>
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid rows={studentData} columns={columns} pageSize={10} rowsPerPageOptions={[5, 10, 25]} />
            </div>
        </div>
    );
};

export default Student;