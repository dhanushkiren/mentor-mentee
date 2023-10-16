import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeRoutes from "./routes/index"

function App() {
  
  return (
    <>
      <Router>
          <ThemeRoutes />
      </Router>
    </>
  )
}

export default App
