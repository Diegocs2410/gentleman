import { useState } from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='mb-8 text-2xl font-bold text-gray-100'>
          Inicia sesión en tu cuenta
        </h1>
        <form onSubmit={handleSubmit}>
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
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
