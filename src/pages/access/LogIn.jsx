import axios from "axios";
import { useContext, useState } from "react";
import { authContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const {storeToken, isAuthenticated} = useContext(authContext);

    const submitHandler = (e) => {
        e.preventDefault();

        //comprobaciones

        axios.post(process.env.REACT_APP_API_URL + "/auth/login", {username, password})
        .then(response => {
            console.log(response.data);
            if(response.data.error) {
                setError(response.data.error);
                return;
            }
            storeToken(response.data.authToken);
            isAuthenticated();
            navigate("/projects");
        })
        .catch(err => {
            console.log(err);
            setError("There has been an error, and you cannot be logged in");
        })
    }

    return(<div className="w-50 mx-auto">
    <h1>LOGIN!</h1>
    <form onSubmit={submitHandler}>
        {error && <div className="alert alert-danger" role="alert">
            {error}
        </div>}
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
    </form>
</div>);
}