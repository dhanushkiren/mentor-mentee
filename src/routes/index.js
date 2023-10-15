import { lazy, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from '../components/Loadable'

const Home = Loadable(lazy(() =>import("../pages/home/Home")));
const UserList = Loadable(lazy(() =>import("../pages/userList/UserList")));
const User = Loadable(lazy(() =>import("../pages/user/User")));
const NewUser = Loadable(lazy(() =>import("../pages/newUser/NewUser")));
const ProductsList = Loadable(lazy(() =>import("../pages/productsList/ProductsList")));
const Staff = Loadable(lazy(() =>import("../pages/Staff/Staff")));
const Student = Loadable(lazy(() =>import("../pages/Student/Student")));

const ThemeRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home">
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
    </Switch>
  );
};

export default ThemeRoutes;
