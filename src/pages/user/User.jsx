// import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
// import React from "react"
// import "./user.css"
// import { Link } from "react-router-dom"
// const User = () => {
//   return (
//     <>
//       <div className='user'>
//         <div className='userTitleContainer'>
//           <h1>Edit User</h1>
//           <Link to='/newUser'>
//             <button>Create</button>
//           </Link>
//         </div>

//         <div className='userContainer'>
//           <div className='userShow'>
//             <div className='userShowTop'>
//               <img src='https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?cs=srgb&dl=pexels-arnie-chou-1557843.jpg&fm=jpg' alt='' />
//               <div className='userShowTopTitle'>
//                 <h3>Anna Becker</h3>
//                 <span>Software Enginner</span>
//               </div>
//             </div>
//             <div className='userShowBottom'>
//               <h3>Account Details</h3>
//               <div className='userShowInfo'>
//                 <PermIdentity className='userShowIcon' />
//                 <span>annbace99</span>
//               </div>
//               <div className='userShowInfo'>
//                 <CalendarToday className='userShowIcon' />
//                 <span>1999.08.24</span>
//               </div>
//               <h3>Contact Details</h3>
//               <div className='userShowInfo'>
//                 <PhoneAndroid className='userShowIcon' />
//                 <span>9813253082</span>
//               </div>
//               <div className='userShowInfo'>
//                 <MailOutline className='userShowIcon' />
//                 <span>annbace99@gmail.com</span>
//               </div>
//               <div className='userShowInfo'>
//                 <LocationSearching className='userShowIcon' />
//                 <span>New York </span>
//               </div>
//             </div>
//           </div>
//           <div className='userUpdate'>
//             <h3>Edit</h3>
//             <form action='' className='userUpdateForm'>
//               <div className='userUpdateLeft'>
//                 <div className='userUpdateLeftItmes'>
//                   <label>Username</label>
//                   <input type='text' placeholder='annabeck99' className='userUpdateInput' />
//                 </div>
//                 <div className='userUpdateLeftItmes'>
//                   <label>Full Name</label>
//                   <input type='text' placeholder='Anna Beck ' className='userUpdateInput' />
//                 </div>
//                 <div className='userUpdateLeftItmes'>
//                   <label>Email</label>
//                   <input type='text' placeholder='annabeck99@gmail.com ' className='userUpdateInput' />
//                 </div>
//                 <div className='userUpdateLeftItmes'>
//                   <label>Phone</label>
//                   <input type='text' placeholder='+ 123 456 7894' className='userUpdateInput' />
//                 </div>
//                 <div className='userUpdateLeftItmes'>
//                   <label>Address</label>
//                   <input type='text' placeholder='New York / USA' className='userUpdateInput' />
//                 </div>
//               </div>
//               <div className='userUpdateRight'>
//                 <div className='userUpdateUpload'>
//                   <img className='userUpdateImg' src='https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?cs=srgb&dl=pexels-ba-phi-1116380.jpg&fm=jpg' alt='' />
//                   <label htmlFor='file'>
//                     <Publish className='userUpdateIcon' />
//                   </label>
//                   <input type='file' id='file' style={{ display: "none" }} />
//                 </div>
//                 <button className='userUpdateButton'>Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default User


import React, { useState, useEffect } from 'react';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import './user.css';

const User = ({ staffData }) => {
  const [userData, setUserData] = useState({
    id: 0,
    name: '',
    department: '',
    designation: '',
    email: '',
    phone: '',
  });

  console.log("staff Data to show:",staffData);

  useEffect(() => {
    if (staffData) {
      setUserData({
        id: staffData.id,
        name: staffData.name,
        department: staffData.department,
        designation: staffData.designation,
        email: staffData.email,
        phone: staffData.phone,
      });
    }
  }, [staffData]);

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleEditFormSubmit = () => {
    // Handle the form submission for editing
    // Send a PUT request to update the server data
    fetch('http://localhost:8081/mentor/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        console.log(data.message); // Success message from the server
        // You should also update the UI with the edited data if needed
      })
      .catch((error) => console.error('Error updating staff member:', error));
  };

  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1>Edit User</h1>
      </div>

      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            {/* Display user data */}
          </div>
        </div>
        <div className='userUpdate'>
          <h3>Edit</h3>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateLeftItmes'>
                <label>Username</label>
                <input type='text' placeholder={userData.name} name='name' onChange={handleEditFormChange} />
              </div>
              <div className='userUpdateLeftItmes'>
                <label>Department</label>
                <input type='text' placeholder={userData.department} name='department' onChange={handleEditFormChange} />
              </div>
              <div className='userUpdateLeftItmes'>
                <label>Designation</label>
                <input type='text' placeholder={userData.designation} name='designation' onChange={handleEditFormChange} />
              </div>
              <div className='userUpdateLeftItmes'>
                <label>Email</label>
                <input type='email' placeholder={userData.email} name='email' onChange={handleEditFormChange} />
              </div>
              <div className='userUpdateLeftItmes'>
                <label>Phone</label>
                <input type='text' placeholder={userData.phone} name='phone' onChange={handleEditFormChange} />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img className='userUpdateImg' src='https://example.com/profile-image.jpg' alt='' />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton' onClick={handleEditFormSubmit}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
