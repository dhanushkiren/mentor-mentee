import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Staff.css';
import { Link } from "react-router-dom"

const Staff = () => {
    const [staffData, setStaffData] = useState([
        { id: 1, name: "John Doe", department: "HR", menteeCount: 5 },
        { id: 2, name: "Jane Smith", department: "IT", menteeCount: 7 },
        { id: 3, name: "Alice Johnson", department: "Finance", menteeCount: 3 },
        { id: 4, name: "Bob Wilson", department: "Marketing", menteeCount: 6 },
        { id: 5, name: "Ella Davis", department: "Sales", menteeCount: 4 },
        { id: 6, name: "Sam Brown", department: "IT", menteeCount: 8 },
        { id: 7, name: "Grace Lee", department: "HR", menteeCount: 2 },
        { id: 8, name: "Michael Green", department: "Finance", menteeCount: 5 },
        { id: 9, name: "Olivia Taylor", department: "Marketing", menteeCount: 7 },
        { id: 10, name: "William Clark", department: "Sales", menteeCount: 4 },
    ]);

    const handleDelete = (id) => {
        setStaffData(staffData.filter((staffMember) => staffMember.id !== id));
    };

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'department', headerName: 'Department', flex: 1 },
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'menteeCount', headerName: 'Mentee Student Count', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className='staffEdit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="staffDelete" onClick={() => handleDelete(params.row.id)} />
                </>
            ),
        },
    ];

    return (
        <div className="staff">
            <h2>Staff List</h2>
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid rows={staffData} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
            </div>
        </div>
    );
};

export default Staff;