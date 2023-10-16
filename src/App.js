import React from 'react';
import "./App.css";
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
