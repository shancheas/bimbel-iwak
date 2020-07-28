import { create } from 'apisauce'

const BASE_URL = 'http://127.0.0.1:8000/api'
const TIMEOUT = 30 * 1000


const api = create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

api.addRequestTransform(request => {
    const token = localStorage.getItem('token')
    request.headers['Authorization'] = `Bearer ${token}`
})

api.addResponseTransform(response => {
    const auth = response.headers['authorization']
    if (auth) {
        const [, token] = auth.split(' ')
        localStorage.setItem('token', token)
    }
})

export default api