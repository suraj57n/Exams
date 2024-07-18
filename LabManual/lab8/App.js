import { useContext } from "react";
import React from "react";
import AuthProvider, { AuthContext } from "./AuthContext";
import Home from "./Home";
import Login from "./Login";
function App(){
  
  return (
    <div>
      <AuthProvider>
        
        <Main/>
      </AuthProvider>
    </div>
  );
}
const Main=()=>{
  const{user}=useContext(AuthContext);
  return (
    <div>
      {user?<Home/>:<Login/>}
    </div>
  );
};
export default App;