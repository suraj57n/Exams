import React,{useState,useContext} from "react";
 import { AuthContext } from "./AuthContext";
 const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const {login}=useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(login(username,password))
            {
                setError('');
            }
        else{
            setError("Error");
        }
    };
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <label>password</label>
                <input
                type='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Login</button>

            </form>
            <p>{error}</p>
            
        </div>
    );
 };
 export default Login;
