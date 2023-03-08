import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ToiletsListPage() {

    const [toilets, setToilets] = useState([]);


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
        
        {toilets.map(toilet => {
            return (<div className="card mt-3 mb-3" key={toilet._id}>
                <h5 className="card-header">{toilet.title}</h5>
                <div className="card-body">
                    <p className="card-text">{toilet.description}</p>
                    <Link to={`/toilets/${toilet._id}`} className="btn btn-primary">View details</Link>
                </div>
            </div>)
        })}
        </div> )
   
}