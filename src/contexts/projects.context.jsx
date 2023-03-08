import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { authContext } from './auth.context';
import ProjectService from '../pages/services/projects.service';

const projectsContext = createContext();    //para "consumir" los datos del context

function ProjectsProviderWrapper(props) {    //para "proveer" datos

    const [projects, setProjects] = useState([]);
    const {getToken} = useContext(authContext);

    const projectService = new ProjectService(getToken());

    const getProjects = () => {
        // axios.get(process.env.REACT_APP_API_URL+"/projects", {headers: {authorization: `Bearer ${getToken()}`}})
        projectService.getProjects()
        .then(results => {
            console.log("projects ctx: ", results.data);
            setProjects(results.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getProjects();
    }, []);

    return(<projectsContext.Provider value={{projects, getProjects}}>
            {props.children}
    </projectsContext.Provider>);
}

export {projectsContext, ProjectsProviderWrapper};