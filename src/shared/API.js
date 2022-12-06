import { BASE_URL } from './constants'
import axios from 'axios'

export const publicAPI = axios.create({
    baseURL: BASE_URL || undefined,
    timeout: 30000,
})

class ApiService {
    #http = axios.create({
        baseURL: BASE_URL || undefined,
        timeout: 30000,
    })

    constructor() {
        this.#http.interceptors.request.use((config) => {
            console.log('config', config)
            return config
        })
    }

    get(path, config) {
        return this.#http.get(path, config).then((res) => res.data)
    }

    post(path, payload, config) {
        return this.#http.post(path, payload, config)
    }

    put(path, payload, config) {
        return this.#http.put(path, payload, config)
    }

    delete(path, config) {
        return this.#http.delete(path, config)
    }
}

export const API = new ApiService()
