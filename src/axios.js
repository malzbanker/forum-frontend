import axios from 'axios'
const axiosconfig=axios.create({
    baseURL:"http://localhost:5500/api"
})
export default axiosconfig