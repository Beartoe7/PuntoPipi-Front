import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

export default function NewToilet() {

    const [toilets, setToilets] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + "/toilets/new", {title, description})
        .then(response => {
            console.log(response)
            getToilets();
            setTitle('');
            setDescription('');
        })
        .catch(err => console.log(err))
    }


    const getToilets = () => {
        axios.get(process.env.REACT_APP_API_URL + "/toilets")
            .then(response => {
                setToilets(response.data);
                console.log(`response.data: ${response.data}`)
            })
            .catch(err => console.log("help me"))
    }

    useEffect(() => {
        getToilets();
    }, [])



    return (<div>
        <form onSubmit={submitHandler} className="w-50 mx-auto mb-5">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Create toilet</button>
        </form>
        <div className="w-50 mx-auto">
       
        </div>
    </div>);
}