import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isTransparent) {
        setIsTransparent(false)
      } else if (window.scrollY === 0 && !isTransparent) {
        setIsTransparent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isTransparent])

  return (
    <nav
      className={`fixed w-full ${
        isTransparent ? 'bg-transparent' : 'bg-gray-900'
      } transition-all duration-500 ease-in-out z-50`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <a href='#home' className='text-white font-bold text-2xl'>
              Gentleman
            </a>
          </div>
          <div className='flex'>
            <a
              href='#home'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Inicio
            </a>
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
            <a
              href='#contact'
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Contacto
            </a>
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
