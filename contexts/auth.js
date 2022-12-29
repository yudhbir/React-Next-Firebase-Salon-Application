import React, { createContext, useState,useEffect} from 'react'
import Router from 'next/router'
//api here is an axios instance which has the baseURL set according to the env.
import { app } from './config';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "firebase/auth";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = async (userfrm) => {
        const authentication = getAuth();
        let response_data=await signInWithEmailAndPassword(authentication, userfrm.email, userfrm.password).then((response) => {
            // console.log(response);
            const user = response._tokenResponse;
            setUser(user);
            localStorage.setItem('Auth_Token', response._tokenResponse.refreshToken)
            if(!!user){
                return user;
            }
        }).catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
        return response_data;        
    }

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem("Auth_Token");
            setUser(null);        
            Router.push('/admin/adminlogin')
        }).catch((error) => {
            console.log("Unable to logout:"+error);
        });
        
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
// export const useAuth = () => useContext(AuthContext);

export const registerUser=(userfrm)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userfrm.email, userfrm.password)
    .then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        console.log(error);
    });
}
export const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        localStorage.removeItem("Auth_Token");               
        Router.push('/admin/adminlogin')
    }).catch((error) => {
        console.log("Unable to logout:"+error);
    });
    
}
export function validate_authentication(){
    const token = localStorage.getItem('Auth_Token')
    if (!token) {
        Router.push('/admin/adminlogin')
    }  
}
export const ProtectRoute = ({ children }) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('Auth_Token')    
        if (!!token) {
            return children;
        }else{
            Router.push('/admin/adminlogin')
        }
    }
};