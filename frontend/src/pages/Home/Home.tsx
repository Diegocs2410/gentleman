import { Link } from 'react-router-dom'
import barberImg from '../../assets/img/barbershop.jpeg'
import {
  Nosotros,
  Navbar,
  Servicios,
  Contacto,
  Testimonials
} from '../../components'

const Home: React.FC = () => {
  return (
    <div className='bg-gray-50 dark-mode'>
      <Navbar />
      <img
        src={barberImg}
        alt='Fondo de la página de inicio'
        className='w-full h-screen object-cover'
      />
      <span className='relative'></span>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' id='home'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 font-serif text-center'>
            Tu mejor opción para un corte de cabello en la ciudad
          </h1>
          <Link
            to='/book'
            className='px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors dark:bg-gray-800 dark:text-white'
          >
            Reservar cita
          </Link>
        </div>
      </div>

      <Servicios />
      {/* Nosotros */}
      <Nosotros />
      <Testimonials />
      <Contacto />
    </div>
  )
}

export default Home
