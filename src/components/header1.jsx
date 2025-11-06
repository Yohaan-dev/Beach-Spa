import React from 'react'
import headerImage from '../assets/images/pexels-thorsten-technoman-109353-338504.jpg';
import { Link } from 'react-router-dom';

const header1 = () => {
  return (
    <header className="relative" style={{
                backgroundImage: `url('${headerImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative container mx-auto">
                    <div className="relative z-10 flex flex-col justify-center items-center space-y-6 pt-48">
                        <h5 className="text-gray-300 text-xl">Welcome to</h5>
                        <h1 className="text-gray-300 text-8xl font-serif text-center">The Wellhall</h1>
                  <h4 className="text-gray-300 text-2xl font-serif">Resort & Spa Hotel</h4>
                  <div className="m-auto max-w-lg my-10 px-6">
                      <Link to="/learn" className="block bg-slate-100 hover:bg-slate-400 text-black text-center px-8 py-3 font-serif">Learn More</Link>
                  </div>
                    </div>
                </div>
            </header>
  )
}

export default header1