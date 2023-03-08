import { useContext } from "react";
import { authContext } from "../contexts/auth.context";
import { Navigate } from "react-router-dom";

export default function IsAnon({children}) {

    const {isLoading, isLoggedIn} = useContext(authContext);

    if(isLoading) return(<p>Loading...</p>);

    if(isLoggedIn) return (<Navigate to="/projects" />)
    else return(<>{children}</>);
}