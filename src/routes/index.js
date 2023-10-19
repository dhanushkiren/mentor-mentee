import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loadable from '../components/Loadable'
import { useAuth } from '../components/Context/AuthContext';


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
  const { state } = useAuth(); // Access the authentication state from the context

  return (
    <>
      {state.isAuthenticated ? (
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
              <Route path="*" element={ <Navigate to="/"  /> } />
            </Routes>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ThemeRoutes;