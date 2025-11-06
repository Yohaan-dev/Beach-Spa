import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const footer1 = () => {
  return (
     <div className='bg-gray-200 py-8 px-8'>
         <div className='w-full mx-auto my-4'>
                  <h1 className='text-gray-900 text-4xl text-start font-serif pb-8'>The Wellhall</h1>
                  <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                      <div className='border border-black border-spacing-1 p-4 flex flex-col'>
                            <h3 className='text-gray-800 font-serif font-bold mb-2'>Reservations Office</h3>
                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='flex items-center space-x-4'>
                                    <FaMapMarkerAlt className='text-2xl' />
                                    <span>7-20100..<br/>Nakuru</span>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    <FaPhoneAlt className='text-2xl' />
                                    <Link to="tel:+254-743-955-900" className='hover:underline'>+254-743-955-900</Link>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    <FaEnvelope className='text-2xl' />
                                    <span><Link to="yohanakipruto@gmail.com" className='hover:underline'>yohanakipruto@gmail.com</Link></span>
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
                          <h3 className='text-gray-800 text-center text-xl font-serif font-bold mb-6'>Get Social</h3>
                            <div className='flex flex-col'>
                                <div className='flex flex-row items-center justify-center space-x-6'>
                                    <Link to="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
                                    <FaFacebookF className='text-2xl' />
                                    </Link>
                                    <Link to="https://twitter.com" target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
                                    <FaXTwitter className='text-2xl' />
                                    </Link>
                                    <Link to="https://instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
                                    <FaInstagram className='text-2xl' />
                                    </Link>
                          </div>
                          <div className="m-auto max-w-lg my-10 px-6"><Link to="/get-intouch" className='block border border-black border-spacing-3 bg-slate-100 hover:bg-slate-400 text-black text-center rounded-sm mt-6 px-4 p-2 cursor-pointer'>Get InTouch with us.</Link></div>
                          </div>
                      </div>
                  </div>
                </div>
                </div>
  )
}

export default footer1