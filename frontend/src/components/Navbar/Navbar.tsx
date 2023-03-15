import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleScroll = () => {
    if (window.scrollY > 0 && isTransparent) {
      setIsTransparent(false)
    } else if (window.scrollY === 0 && !isTransparent) {
      setIsTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isTransparent])

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        isTransparent ? 'bg-transparent' : 'bg-gray-900'
      } transition-all duration-500 ease-in-out z-50`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-white font-bold text-2xl'>
              Gentleman
            </Link>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex'>
              <li>
                <a
                  href='#home'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Contacto
                </a>
              </li>
              <li>
                <Link
                  to='/login'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:hidden'>
            <button
              type='button'
              className='block text-gray-300 hover:text-white focus:text-white focus:outline-none'
              onClick={handleToggle}
            >
              <FaBars className='h-6 w-6' />
            </button>
          </div>
        </div>
      </nav>

      {isExpanded && (
        <nav className='md:hidden transition duration-300 ease-in-out opacity-60 bg-black'>
          <ul className='flex flex-col items-center'>
            <li>
              <a
                href='#home'
                className='block text-white font-medium hover:text-gray-300 py-2'
                onClick={handleToggle}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href='#services'
                className='block text-white font-medium hover:text-gray-300 py-2'
                onClick={handleToggle}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='block text-white font-medium hover:text-gray-300 py-2'
                onClick={handleToggle}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block text-white font-medium hover:text-gray-300 py-2'
                onClick={handleToggle}
              >
                Contacto
              </a>
            </li>
            <li>
              <Link
                to='/login'
                className='block text-white font-medium hover:text-gray-300 py-2'
                onClick={handleToggle}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
