import React, { createContext, useState,useEffect} from 'react'
//api here is an axios instance which has the baseURL set according to the env.
import { app } from './config';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";


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

    const logout = (email, password) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem("Auth_Token");
            setUser(null);        
            window.location.pathname = '/users/login'
        }).catch((error) => {
            console.log(error)
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
export function validate_authentication(){
    const token = localStorage.getItem('Auth_Token')
    if (!!token) {
        window.location.pathname = '/admin/dashboard/dashboard'
    }else{
        window.location.pathname = '/admin/adminlogin'
    }  
}
export const ProtectRoute = ({ children }) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('Auth_Token')    
        if (!!token) {
            return children;
        }else{
            window.location.pathname = '/admin/adminlogin'
        }
    }
  };