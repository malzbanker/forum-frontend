import axios from "axios"
const axiosconfigbase= axios.create({
    baseURL:"http://localhost:5500/api"
})
export default axiosconfigbase