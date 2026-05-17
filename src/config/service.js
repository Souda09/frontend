import axios from 'axios'


// http://localhost:3000/api/v1


const url = 'http://localhost:7000/api/v1'
const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"


    },
    withCredentials: true
})


export default api