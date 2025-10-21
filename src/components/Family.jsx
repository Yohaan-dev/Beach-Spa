import React from 'react'
import familyImage from '../assets/images/pexels-pixabay-261102.jpg'

const Family = () => {
  return (
     <div className='container mx-auto bg-orange-50 py-10 px-10 mt-8'>
              <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 items-center justify-between'>
                  <div className='text-left space-y-6'>
                      <h3 className='text-left text-2xl font-serif'>The Family Suite</h3>
                      <p className='max-w-md text-left py-3'>At Wellhall Spa Resort, every family is part of our story. We believe relaxation and connection go hand in hand, which is why we’ve created an atmosphere where guests of all ages can unwind, play, and make lasting memories together.</p>
                  </div>
                  <div className='md:w-80 space-y-4'>
                  <img className='md:w-80' src={familyImage} alt="family-image" />
                  <p className='border border-black border-spacing-1 text-center py-2 font-serif'>The perfect place to relax after a day of laughter and exploration.</p>
                  </div>
              </div>
        </div>
  )
}

export default Family