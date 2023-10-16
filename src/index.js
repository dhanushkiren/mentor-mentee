import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Route, Outlet } from "react-router-dom";
import App from "./App"
import Login from "./pages/ResuableComponents/Login/Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Router>
      <App />
    </Router>
  
);