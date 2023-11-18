import axios from 'axios'
import {API_BASE_URL, API_KEY} from '@env'

const api = axios.create({ 
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
})

export { api }