import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")} `
}

const serviceApi = {
    getAll: () => api.get('/service'),
    getAllService: () => api.get('/service', {headers})
}

export default serviceApi;