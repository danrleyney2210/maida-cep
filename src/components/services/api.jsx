import axios from 'axios';

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/01001000/json/",
})


export default api;