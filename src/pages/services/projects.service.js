import axios from "axios";
// import { authContext } from "../contexts/auth.context";

class ProjectsService {
    constructor(token) {
        this.headerObject = {headers: {authorization: `Bearer ${token}`}}
    }
    getProjects() {
        return axios.get(process.env.REACT_APP_API_URL+"/toilets", this.headerObject);
    }
    addProject(project) {
        return axios.post(process.env.REACT_APP_API_URL+"/toilets/new", project, this.headerObject);
    }
    // editProject(projectId, project) {
    //     return axios.put(process.env.REACT_APP_API_URL+`/projects/edit/${projectId}`, project, this.headerObject);

    // }
    // deleteProject(projectId) {
    //     return axios.delete(process.env.REACT_APP_API_URL+`/projects/delete/${projectId}`, this.headerObject);
    // }
}

export default ProjectsService;