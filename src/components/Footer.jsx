import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
    return (
      <div className='bg-gray-200 py-8 px-8'>
     <div className='container mx-auto my-4'>
              <h1 className='text-gray-900 text-4xl text-start font-serif pb-8'>The Wellhall</h1>
              <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                        <h3 className='text-gray-800 font-serif font-bold mb-2'>Reservations Office</h3>
                        <div className='flex flex-col justify-center space-y-4'>
                            <div className='flex items-center space-x-4'>
                                <FaMapMarkerAlt className='text-2xl' />
                                <p>7-20100..<br/>Nakuru</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <FaPhoneAlt className='text-2xl' />
                                <a href="tel:+254-743-955-900" className='hover:underline'>+254-743-955-900</a>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <FaEnvelope className='text-2xl' />
                                <a href="yohanakipruto@gmail.com" className='hover:underline'>yohanakipruto@gmail.com</a>
                            </div>
                        </div>
                  </div>
                  <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                      <h3 className='text-gray-800 font-serif font-bold mb-2'>Office Hours</h3>
                        <div className='flex flex-col space-y-2'>
                            <p>Monday to Friday</p>
                            <p>9:00 am to 6:00 pm</p>
                            <p className='pt-3'>Saturday</p>
                            <p>9:00 am to 12:00 noon</p>
                      </div>
                  </div>
                  <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                      <h3 className='text-gray-800 font-serif font-bold mb-2'>Get Social</h3>
                        <div className='flex flex-col'>
                            <div className='flex flex-row space-x-3'>
                                <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
                                <FaFacebookF className='text-2xl' />
                                </a>
                                <a href="https://twitter.com" target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
                                <FaXTwitter className='text-2xl' />
                                </a>
                                <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
                                <FaInstagram className='text-2xl' />
                                </a>
                            </div>
                            <p className='border border-black border-spacing-3 text-center rounded-lg mt-6 px-4 p-2 cursor-pointer'>Get InTouch with us.</p>
                      </div>
                  </div>
              </div>
            </div>
            </div>
  )
}

export default Footer