import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PersonOutline, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import React from "react"
import "./Sidebar.css"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Sidebar = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("authenticated");
    window.location.reload();
    navigate("/login");
  };

  return (
    <>
      <div className='sidebar'>
        <div className='sideWrapper'>
          <div className='sidebarMenu'>
            <h3>Dashboard</h3>
            <ul className='sidebarList'>
              <Link to='/' className='sidebarListItem active'>
                <LineStyle className='sidebarIcon' />
                Home
              </Link>
              <Link to='/Staff' className='sidebarListItem'>
                <Timeline className='sidebarIcon' />
                Staff
              </Link>
              <Link to='/Student' className='sidebarListItem'>
                <TrendingUp className='sidebarIcon' />
                Students
              </Link>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3>Quick Menu</h3>
            <ul className='sidebarList'>
              <Link to='/users' className='sidebarListItem '>
                <PersonOutline className='sidebarIcon' />
                Add Staff
              </Link>
              <Link to='/products' className='sidebarListItem'>
                <Storefront className='sidebarIcon' />
                Add Student
              </Link>
              <Link className='sidebarListItem'>
                <AttachMoney className='sidebarIcon' />
                Feedback
              </Link>
              <Link className='sidebarListItem'>
                <BarChart className='sidebarIcon' />
                Reports
              </Link>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3>Notification</h3>
            <ul className='sidebarList'>
              <Link className='sidebarListItem '>
                <MailOutline className='sidebarIcon' />
                Leave
              </Link>
              <Link className='sidebarListItem'>
                <DynamicFeed className='sidebarIcon' />
                On Duty
              </Link>
              <Link className='sidebarListItem'>
                <ChatBubbleOutline className='sidebarIcon' />
                Messages
              </Link>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3>Session</h3>
            <ul className='sidebarList'>
              <Link className="sidebarLink" onClick={handleLogout}>
                <WorkOutline className='sidebarIcon' />
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
