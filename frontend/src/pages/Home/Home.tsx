import { Link } from 'react-router-dom'
import barberImg from '../../assets/img/barbershop.jpeg'
import { Nosotros, Navbar, Servicios } from '../../components'

const Home: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <div className='relative' id='home'>
        <img
          src={barberImg}
          alt='Fondo de la página de inicio'
          className='w-full h-screen object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
          <h1 className='text-5xl font-extrabold tracking-tight mb-8 font-serif'>
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

      <Servicios />
      {/* Nosotros */}
      <Nosotros />
    </div>
  )
}

export default Home
