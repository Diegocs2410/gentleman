import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='relative'>
        <img
          src='/images/home-background.jpg'
          alt='Fondo de la página de inicio'
          className='w-full h-screen object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
          <h1 className='text-5xl font-extrabold tracking-tight mb-8'>
            Tu mejor opción para un corte de cabello en la ciudad
          </h1>
          <Link
            to='/book'
            className='px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors'
          >
            Reservar cita
          </Link>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-8'>
          Servicios que ofrecemos
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src='/images/services/haircuts.jpg'
              alt='Cortes de cabello'
              className='w-full h-56 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-lg font-medium mb-2'>Cortes de cabello</h3>
              <p className='text-gray-500'>
                Ofrecemos una variedad de estilos y cortes de cabello para
                hombres y niños.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src='/images/services/beard.jpg'
              alt='Afeitado de barba'
              className='w-full h-56 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-lg font-medium mb-2'>Afeitado de barba</h3>
              <p className='text-gray-500'>
                Nuestros barberos expertos te darán un afeitado de barba
                profesional y de calidad.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              src='/images/services/styling.jpg'
              alt='Peinado y estilo'
              className='w-full h-56 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-lg font-medium mb-2'>Peinado y estilo</h3>
              <p className='text-gray-500'>
                Déjanos ayudarte a encontrar el peinado y estilo que más te
                guste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
