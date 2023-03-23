import axios from 'axios'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const baseUrl = 'http://localhost:4000'

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const loginUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await api.post('/users/login', { name, email, password })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire({
        title: 'Error',
        text: 'Usuario no encontrado',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    throw error
  }
}

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await api.post('/users/create', {
      name,
      email,
      password
    })
    toast.success('Usuario creado correctamente')

    return response.data
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      const errorMessage = error.response.data.message
      Swal.fire({
        icon: 'error',
        title: 'Error al crear usuario',
        text: errorMessage
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear usuario',
        text: 'Ocurrió un error al intentar crear un usuario'
      })
    }
    throw error
  }
}
