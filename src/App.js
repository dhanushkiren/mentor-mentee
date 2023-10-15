import React, { useEffect } from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeRoutes from "./routes/index"

function App() {
  
  return (
    <>
      <Router>
        <Topbar />
        <div className='appContainer'>
          <Sidebar />
          <ThemeRoutes />
        </div>
      </Router>
    </>
  )
}

export default App
