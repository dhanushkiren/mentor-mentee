import { lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loadable from '../components/Loadable'
import Login from "../pages/ResuableComponents/Login/Login";

const Home = Loadable(lazy(() =>import("../pages/home/Home")));
const UserList = Loadable(lazy(() =>import("../pages/userList/UserList")));
const User = Loadable(lazy(() =>import("../pages/user/User")));
const NewUser = Loadable(lazy(() =>import("../pages/newUser/NewUser")));
const ProductsList = Loadable(lazy(() =>import("../pages/productsList/ProductsList")));
const Staff = Loadable(lazy(() =>import("../pages/Staff/Staff")));
const Student = Loadable(lazy(() =>import("../pages/Student/Student")));
const Sidebar = Loadable(lazy(() =>import("../components/sidebar/Sidebar")));
const Topbar = Loadable(lazy(() =>import("../components/topbar/Topbar")));

const ThemeRoutes = () => {
  return (
    <>
    <Topbar />
    <div className="appContainer">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </>
  );
};

export default ThemeRoutes;