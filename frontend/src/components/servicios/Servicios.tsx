import hairCut from '../../assets/img/hair.jpeg'
import beardImg from '../../assets/img/beard.jpeg'
import styleHair from '../../assets/img/peinados.jpeg'

const Servicios = () => {
  return (
    <section
      id='services'
      className=' mx-auto py-16 px-4 pb-2 sm:px-6 lg:px-8 bg-black'
    >
      <h2 className='text-3xl font-extrabold tracking-tight mb-8 text-white'>
        Servicios que ofrecemos
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='rounded-lg shadow-md overflow-hidden'>
          <img
            src={hairCut}
            alt='Cortes de cabello'
            className='w-full h-56 object-cover'
          />
          <div className='p-4 text-gray-200 font-serif'>
            <h3 className='text-xl font-bold mb-2'>Cortes de cabello</h3>
            <p>
              Ofrecemos una variedad de estilos y cortes de cabello para hombres
              y niños.
            </p>
          </div>
        </div>
        <div className='font-serif rounded-lg shadow-md overflow-hidden'>
          <img
            src={beardImg}
            alt='Afeitado de barba'
            className='w-full h-56 object-cover'
          />
          <div className='p-4 text-gray-200'>
            <h3 className='text-xl font-serif font-bold mb-2'>
              Afeitado de barba
            </h3>
            <p>
              Nuestros barberos expertos te darán un afeitado de barba
              profesional y de calidad.
            </p>
          </div>
        </div>
        <div className='font-serif text-gray-200 rounded-lg shadow-md overflow-hidden'>
          <img
            src={styleHair}
            alt='Peinado y estilo'
            className='w-full h-56 object-cover'
          />
          <div className='p-4'>
            <h3 className='text-xl  mb-2 font-bold'>Peinado y estilo</h3>
            <p>
              Déjanos ayudarte a encontrar el peinado y estilo que más te guste.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
