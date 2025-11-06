import React from 'react'
import promosImage1 from '../assets/images/sidath-vimukthi-bPq8tVLpI4w-unsplash.jpg'
import promosImage2 from '../assets/images/rayyu-maldives-AAkgXH7uUKU-unsplash.jpg'
import promosImage3 from '../assets/images/pexels-francesco-ungaro-96444.jpg'

const promos1 = () => {
  return (
    <div className='w-full mx-auto my-32'>
              <h1 className='text-gray-900 text-4xl text-center font-serif pb-8'>Promos and Offers</h1>
              <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='flex flex-col bg-white shadow-lg rounded-md overflow-hidden h-full mx-4'>
                  <img src={promosImage1} alt="promos-image 1" className='h-64 w-full object-cover' />
                  <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                      <h3 className='text-gray-800 font-serif mb-2'>Early Bird Discount</h3>
                      <p className='text-gray-600 text-sm'>Book your stay at least 30 days in advance and enjoy a 20% discount on our standard room rates. Perfect for planners.</p>
                  </div>
              </div>
              <div className='flex flex-col bg-white shadow-lg rounded-md overflow-hidden h-full mx-4'>
                  <img src={promosImage2} alt="promos-image 2" className='h-64 w-full object-cover' />
                  <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                      <h3 className='text-gray-800 font-serif mb-2'>Wellhall Members Club</h3>
                      <p className='text-gray-600 text-sm'>Enjoy a refreshing morning swim beneath the open sky, unwind on our sun loungers with a cool drink in hand, or take a soothing dip after a rejuvenating spa session.</p>
                  </div>
                  </div>
                  <div className='flex flex-col bg-white shadow-lg rounded-md overflow-hidden h-full mx-4'>
                  <img src={promosImage3} alt="promos-image 3" className='h-64 w-full object-cover'/>
                  <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                      <h3 className='text-gray-800 font-serif mb-2'>Book 3 Nights,<br/>Get 1 Night Free</h3>
                      <p className='text-gray-600 text-sm'>At Wellhall, every moment by the pool is designed to refresh your body and uplift your spirit — a true reflection of wellness and serenity.</p>
                  </div>
              </div>
              </div>
        </div>
  )
}

export default promos1