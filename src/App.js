import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeRoutes from "./routes/index"
import ScrollTop from './components/scrollTop';

function App() {
  
  return (
    <>
      <ScrollTop>
        <ThemeRoutes />
      </ScrollTop>
    </>
  )
}

export default App
