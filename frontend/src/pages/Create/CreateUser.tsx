import { useState } from 'react'
import * as Yup from 'yup'
import { createUser } from '../../api/api'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await Yup.object({
        name: Yup.string().required('Campo requerido'),
        email: Yup.string()
          .email('Correo electrónico inválido')
          .required('Campo requerido'),
        password: Yup.string().required('Campo requerido')
      }).validate({ name, email, password }, { abortEarly: false })
      const response = await createUser(name, email, password)
      console.log(response)
      setName('')
      setEmail('')
      setPassword('')
      setErrors({})
      navigate('/')
    } catch (error) {
      const validationErrors: { [key: string]: string } = {}
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          validationErrors[err.path as string] = err.message
        })
      }
      setErrors(validationErrors)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='mb-8 text-2xl font-bold text-gray-100'>Crear usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 ${
                errors.name ? 'border-red-500' : ''
              }`}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrors((prevState) => {
                  const newState = { ...prevState }
                  delete newState.name
                  return newState
                })
              }}
            />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 ${
                errors.email ? 'border-red-500' : ''
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors((prevState) => {
                  const newState = { ...prevState }
                  delete newState.email
                  return newState
                })
              }}
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 ${
                errors.password ? 'border-red-500' : ''
              }`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setErrors((prevState) => {
                  const newState = { ...prevState }
                  delete newState.password
                  return newState
                })
              }}
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password}</p>
            )}
          </div>
          <button
            type='submit'
            className='w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
          >
            Crear usuario
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
