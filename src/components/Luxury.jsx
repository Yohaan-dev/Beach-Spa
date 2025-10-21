import React from 'react'
import luxuryImage1 from '../assets/images/pexels-jimbear-1458457.jpg'
import luxuryImage2 from '../assets/images/pexels-pixabay-258154 (1).jpg'

const Luxury = () => {
  return (
      <div className='container mx-auto my-8'>
          <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-2'>
              <div className='space-y-4 text-center mx-4'>
                  <img src={luxuryImage1} alt="luxury Image 1" className='rounded-md' />
                  <p className='border border-black border-spacing-1 px-4 py-4 text-center'>Whether you’re celebrating a special occasion or simply taking time away, Wellhall Spa Resort is a sanctuary for families who value wellness, togetherness, and peace.</p>
              </div>
              <div className='space-y-4 text-center mx-4'>
                  <img src={luxuryImage2} alt="luxury Image 2" className='rounded-md' />
                  <p className='border border-black border-spacing-1 px-4 py-4 text-center'>Dive into relaxation at Wellhall Spa Resort’s beautifully designed swimming pool — a perfect blend of tranquility and luxury.</p>
              </div>
          </div>
    </div>
  )
}

export default Luxury