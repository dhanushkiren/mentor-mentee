import { lazy, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/Staff">
            <Staff />
          </Route>
          <Route path="/Student">
            <Student />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ThemeRoutes;