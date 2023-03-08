import axios from "axios";
import { createContext, useEffect, useState } from "react";

const authContext = createContext();

function AuthProviderWrapper({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const storeToken = (token) => {
        localStorage.setItem("authToken", token);
    }

    const deleteToken = () => {
        localStorage.removeItem("authToken");
    }

    const getToken = () => {
        return localStorage.getItem("authToken");
    }

    const isAuthenticated = () => {
        setIsLoading(true);
        
        let token = localStorage.getItem("authToken");
        if(token) {
            axios.get(process.env.REACT_APP_API_URL+"/auth/verify", { headers: { authorization: `Bearer ${token}` } })
            .then(response => {
                console.log(response.data);
                setIsLoggedIn(true);
                setUser(response.data);
                setTimeout(()=>{
                    setIsLoading(false);
                }, 1000);
            })
            .catch(err => {
                setIsLoggedIn(false);
                setUser(null);
                setTimeout(()=>{
                    setIsLoading(false);
                }, 1000);
            })
        } else {
            setIsLoggedIn(false);
            setUser(null);
            setTimeout(()=>{
                setIsLoading(false);
            }, 1000);
        }
    }

    useEffect(()=>{
        isAuthenticated();
    }, []);

    return(<authContext.Provider value={{isLoggedIn, user, storeToken, isAuthenticated, deleteToken, isLoading, getToken}}>
        {children}
    </authContext.Provider>);
}

export {authContext, AuthProviderWrapper};