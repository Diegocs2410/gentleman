import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const Contacto: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-8'>
          Contáctanos
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div>
            <div className='flex items-center mb-4'>
              <FaPhone className='text-3xl mr-4' />
              <p className='text-lg'>
                Teléfono:{' '}
                <a href='tel:555-555-5555' className='underline'>
                  555-555-5555
                </a>
              </p>
            </div>
            <div className='flex items-center mb-4'>
              <FaMapMarkerAlt className='text-3xl mr-4' />
              <p className='text-lg'>
                Dirección: 1234 Avenida Principal, Ciudad de México
              </p>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='text-3xl mr-4' />
              <p className='text-lg'>
                Correo electrónico:{' '}
                <a href='mailto:info@gentleman.com' className='underline'>
                  info@gentleman.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='sr-only'>
                  Nombre completo
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-800 focus:ring-0'
                  placeholder='Nombre completo'
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Correo electrónico
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-800 focus:ring-0'
                  placeholder='Correo electrónico'
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>
                  Mensaje
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-800 focus:ring-0'
                  placeholder='Mensaje'
                ></textarea>
              </div>
              <div>
                <button
                  type='submit'
                  className='inline-flex items-center px-6 py-3 border border-transparent rounded-md font-semibold text-gray-800 bg-white hover:bg-gray-100 transition-colors'
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contacto
