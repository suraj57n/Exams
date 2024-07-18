import React,{createContext,useState,useEffect} from "react";
export const AuthContext=createContext();
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const storeduser=localStorage.getItem('user');
        if(storeduser)
            {
                setUser(JSON.parse(storeduser));
            }
            
    },[]);
    const login=(username,password)=>{
        const predefinedUsers=[
            {username:"u1",password:"p1"},
            {username:"u2",password:"p2"}
        ];
        const founduser=predefinedUsers.find(
            (u)=>u.username===username &&u.password===password
        );
        if(founduser)
            {
                setUser(founduser);
                localStorage.setItem('user',JSON.stringify(founduser));
                return true;
            }
            return false;

    };
    const logout=()=>{
        setUser(null);
        localStorage.removeItem('user');
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
        {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;