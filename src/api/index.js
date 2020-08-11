import { create } from 'apisauce'

// const BASE_URL = 'https://14228af70397.ngrok.io/'
const BASE_URL = 'http://127.0.0.1:8000/'
const TIMEOUT = 30 * 1000


const api = create({
    baseURL: BASE_URL + 'api',
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

export {
    BASE_URL
}