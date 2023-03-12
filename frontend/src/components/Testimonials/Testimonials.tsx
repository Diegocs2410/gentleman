import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Avatar from 'react-avatar'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Testimonials: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-8'>
          Testimonios de nuestros clientes
        </h2>
        <Slider {...settings}>
          <div className='flex flex-col items-center justify-center'>
            <Avatar name='foo bar' />
            <p className='text-gray-800 text-lg font-medium mb-2'>
              "El mejor corte de cabello que he tenido en mi vida."
            </p>
            <p className='text-gray-600 text-sm'>- Juan Pérez</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Avatar size='150' />

            <p className='text-gray-800 text-lg font-medium mb-2'>
              "El servicio es excelente, siempre salgo contento."
            </p>
            <p className='text-gray-600 text-sm'>- Luisa Martínez</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Avatar skypeId='sitebase' size='200' />

            <p className='text-gray-800 text-lg font-medium mb-2'>
              "Me encanta el ambiente de la barbería, siempre me siento
              bienvenido."
            </p>
            <p className='text-gray-600 text-sm'>- Ricardo González</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials
