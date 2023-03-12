import barberImg from '../../assets/img/barbershop.jpeg'

const Nosotros: React.FC = () => {
  return (
    <section className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div id='about'>
          <h2 className='text-3xl font-extrabold tracking-tight mb-4'>
            Quiénes somos
          </h2>
          <p className='text-gray-500 mb-4'>
            Somos una barbería con más de 10 años de experiencia en la ciudad.
            Nuestro objetivo es ofrecer a nuestros clientes un servicio de
            calidad, con profesionales altamente capacitados y productos de
            primera línea.
          </p>
          <p className='text-gray-500'>
            En nuestra barbería podrás encontrar un a amplia variedad de
            servicios para el cuidado del cabello y la barba, así como productos
            de alta calidad para el cuidado personal.
          </p>
        </div>
        <div>
          <img
            src={barberImg}
            alt='Barberos trabajando'
            className='w-full h-auto'
          />
        </div>
      </div>
    </section>
  )
}
export default Nosotros
