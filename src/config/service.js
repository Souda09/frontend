import axios from 'axios'


// http://localhost:3000/api/v1


const url = 'https://backend-one-ochre-37.vercel.app/api/v1'
const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"


    },
    withCredentials: true
})


export default api