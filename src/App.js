import React from 'react';
import './App.css';
import ThemeRoutes from './routes/index';
import ScrollTop from './components/scrollTop';
// import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider} from './components/AuthContext'; // Import your AuthProvider
import { useAuth } from './components/AuthContext';
import Login from './pages/ResuableComponents/Login/Login' // Import your Login component

function App() {
  const { state } = useAuth(); // Access the authentication state from the context

  return (
    // <Router>
      <AuthProvider>
        <ScrollTop>
          <AppContent />
          {!state.isAuthenticated && <Login />}
        </ScrollTop>
      </AuthProvider>
    // </Router>
  );
}

function AppContent() {
  return <ThemeRoutes />;
}

export default App;