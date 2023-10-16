import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router,Route, Outlet } from "react-router-dom";
import App from "./App"
import Login from "./pages/ResuableComponents/Login/Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Route index element={Login}>
        <Outlet/>
      <App />
      </Route>
    </Router>
  
);