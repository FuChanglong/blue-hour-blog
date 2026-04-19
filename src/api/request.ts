import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('blue-hour-user')

  if (userInfo) {
    const { token } = JSON.parse(userInfo) as { token?: string }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

export default request
