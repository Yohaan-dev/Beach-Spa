import React from 'react'

const GetIntouch = () => {
  
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-16">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border rounded w-full py-2 px-3 mb-2 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                placeholder="Hello..."
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border rounded w-full py-2 px-3 mb-2 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none'
                placeholder='hello@1.com'
                required           
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                placeholder="Optional phone for applicants"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                className="border rounded w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                rows="4"
                placeholder="message here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetIntouch