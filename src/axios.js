import axios from 'axios'
const axiosconfig=axios.create({
    // baseURL: "http://localhost:5500/api"
    baseURL:"https://forum-backend-hwau.onrender.com/api"
})
export default axiosconfig