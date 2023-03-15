import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Contáctanos</h2>
      <div className='flex items-center mb-2'>
        <FiPhone className='h-6 w-6 mr-2 text-gray-600 dark:text-gray-400' />
        <span className='text-gray-600 dark:text-gray-400'>
          +1 (555) 555-1234
        </span>
      </div>
      <div className='flex items-center mb-2'>
        <FiMail className='h-6 w-6 mr-2 text-gray-600 dark:text-gray-400' />
        <span className='text-gray-600 dark:text-gray-400'>
          info@barbershop.com
        </span>
      </div>
      <form className='w-full max-w-md'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Nombre
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:text-white'
              id='grid-first-name'
              type='text'
              placeholder='Juan'
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-last-name'
            >
              Apellido
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:text-white'
              id='grid-last-name'
              type='text'
              placeholder='Pérez'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='grid-email'
          >
            Correo electrónico
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:text-white'
            id='grid-email'
            type='email'
            placeholder='example@example.com'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='grid-message'
          >
            Mensaje
          </label>
          <textarea
            className='no-resize appearance-none block w-full bg-gray-200
      text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:text-white'
            id='grid-message'
            placeholder='Escriba su mensaje aquí...'
          ></textarea>
        </div>
        <div className='flex justify-end'>
          <button
            className='px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors dark:bg-gray-800 dark:text-white'
            type='button'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
