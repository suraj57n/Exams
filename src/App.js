import './App.css';
import React from "react";
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import DashBoard from './DashBoard';
import WeatherMap from './WeatherMap';

// import 
const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <DashBoard /> : <Login />;
};

function App() {
  return (
  //
    //  <div className="App">
    //   <WeatherMap/>
    //  </div>
    <AuthProvider>
    <AppContent />
  </AuthProvider>
  
  );
}

export default App;
