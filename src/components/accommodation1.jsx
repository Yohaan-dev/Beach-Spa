import React from 'react'
import accommodationImage1 from '../assets/images/pexels-pixabay-164595.jpg'
import accommodationImage2 from '../assets/images/pexels-pixabay-271624.jpg'
import accommodationImage3 from '../assets/images/pexels-pixabay-271639.jpg'

const accommodation1 = () => {
  return (
    <div className='w-md mx-auto px-4 py-5'>
                <h2 className='text-4xl text-orange-950 font-serif text-center pb-5'>Accommodations</h2>
                <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-3'>
                    <div className='space-y-4'>
                        <img src={accommodationImage1} alt="Accommodation 1" className='rounded-md md:w-96 md:h-60' />
                        <div className='border border-black border-spacing-1 pl-4 py-4'>
                            <h1 className='text-sm'>2 adults | 1 child below 7</h1>
                            <h1 className='text-2xl py-4'>De Luxe Room</h1>
                            <p>from $189 a night</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <img src={accommodationImage2} alt="Accommodation 2" className='rounded-md md:w-96 md:h-60' />
                        <div className='border border-black border-spacing-1 pl-4 py-4'>
                            <h1 className='text-sm'>2 adults | 1 child below 7</h1>
                            <h1 className='text-2xl py-4'>De Luxe Sea View</h1>
                            <p>from $209 a night</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <img src={accommodationImage3} alt="Accommodation 3" className='rounded-md md:w-96 md:h-60' />
                        <div className='border border-black border-spacing-1 pl-4 py-4'>
                            <h1 className='text-sm'>4 adults | 2 children below 7</h1>
                            <h1 className='text-2xl py-4'>The Wellhall Family Suite</h1>
                            <p>from $399 a night</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default accommodation1