import axios from "axios";

const api = axios.create({
  baseURL: 'https://artjoms-spole.fly.dev',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default api