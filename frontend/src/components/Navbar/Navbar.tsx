import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar: React.FC = () => {
  const [navbarClass, setNavbarClass] = useState('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarClass('bg-gray-900 bg-opacity-75')
      } else {
        setNavbarClass('bg-transparent')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full ${navbarClass} z-50`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-white font-bold text-2xl'>
              Gentleman
            </Link>
          </div>
          <div className='flex'>
            <Link
              to='#services'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Inicio
            </Link>
            <a
              href='#services'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Servicios
            </a>
            <a
              href='#about'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Nosotros
            </a>
            <Link
              to='/contact'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Contacto
            </Link>
            <Link
              to='/login'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
