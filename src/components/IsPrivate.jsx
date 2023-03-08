import { useContext } from "react";
import { authContext } from "../contexts/auth.context";
import { Navigate } from "react-router-dom";

export default function IsPrivate({children}) {

    const {isLoggedIn, isLoading} = useContext(authContext);

    console.log("isLoggedIn: ", isLoggedIn);
    console.log("isLoading: ", isLoading);

    if(isLoading) return(<p>loading...</p>);

    if(isLoggedIn) return(<>{children}</>);
    else return(<Navigate to="/login" />);

}