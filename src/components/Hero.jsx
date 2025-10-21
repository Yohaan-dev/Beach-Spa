import React from 'react'
import heroImage from '../assets/images/pexels-enginakyurt-1579253.jpg'

const Hero = () => {
  return (
      <div className='container mx-auto bg-slate-50 py-10 px-10'>
          <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 items-center justify-between'>
              <div className='text-left space-y-4'>
                  <h3 className='text-left text-2xl font-serif'>🌿 Wellhall Spa Resort – Where Tranquility Meets Luxury</h3>
                  <p className='max-w-md text-left py-3'>Nestled in a serene natural setting, Wellhall Spa Resort is your ultimate destination for relaxation, wellness, and rejuvenation. We offer a unique blend of modern comfort and holistic therapies designed to refresh your body, mind, and spirit.</p>
              </div>
              <div>
                  <img className='md:w-80' src={heroImage} alt="hero-image" />
              </div>
          </div>
    </div>
  )
}

export default Hero