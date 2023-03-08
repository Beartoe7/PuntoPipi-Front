import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRep, setPasswordRep] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        //comprobaciones
        if(username === "" || password === "" || passwordRep === "") {
            setError("faltan campos!");
            return;
        }
        if(password !== passwordRep) {
            setError("passwords no coinciden!");
            return;
        }

        //comprobar password fuerte

        axios.post(process.env.REACT_APP_API_URL+"/auth/signup", {username, password})
        .then(response => {
            console.log(response.data);
            navigate("/login");
        })
        .catch(err => {
            console.log(err);
            setError("There has been an error, and you cannot be logged in");
            return;
        })
    }

    return(<div className="w-50 mx-auto">
    <h1>SIGNUP!</h1>
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
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password repeat</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={passwordRep} onChange={(e)=>setPasswordRep(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
    </form>
</div>);
}