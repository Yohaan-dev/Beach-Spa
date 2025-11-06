import React from 'react'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const LearnPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqDatas = [
    {
      number: "01",
      question: 'What time is check-in and check-out?',
      answer: 'Check-in is available from 2:00 PM onwards, and check-out is by 12:00 noon. Need a little extra time? Let us know in advance-we\'ll do our best to accommodate early check-ins or late check-outs,depending on availability.'
    },
    {
      number: "02",
      question: 'Is parking available at the hotel?',
      answer: "Yes, we offer complimentary parking for all our guests. We have both outdoor and covered parking options available on a first-come, first-served basis."
    },
    {
      number: "03",
      question: 'Is breakfast included with the stay?',
      answer: "Breakfast is included in all our room packages. We serve a complimentary continental breakfast daily from 7:00 AM to 10:30 AM in our dining area."
    },
    {
      number: "04",
      question: 'What facilities do you offer for families or long-term stays?',
      answer: "We offer family suites, connecting rooms, and amenities like laundry services, kitchenettes, and childcare services. Long-term stays include additional benefits like weekly housekeeping and grocery delivery."
    },
    {
      number: "05",
      question: 'Do you allow pets?',
      answer: "Yes, we are a pet-friendly hotel! We allow pets up to 25kg with a small additional fee. Please inform us in advance about your furry friends."
    },
    {
      number: "06",
      question: 'Do you offer airport transfers??',
      answer:  "We offer complimentary airport shuttle service from 6:00 AM to 10:00 PM. Please schedule your transfer at least 24 hours in advance with our front desk."
    },
    {
      number: "07",
      question: "Can I cancel or change my reservation?",
      answer: "Yes, you can cancel or modify your reservation up to 48 hours before check-in without any charges. Late cancellations may incur a one-night fee."
    }
  ]

  return (
   <section className='container mx-auto my-10'>
        <div className='flex flex-col justify-center items-center space-y-4 px-4'>
          <h1 className='text-3xl font-serif text-center'>Stuck or unsure? Got <br />questions? We've got you.</h1>
          <p className='font-serif py-3'>From quick answers to in-depth guidance,we're committed to making sure you feel confident</p>
          {faqDatas.map((faqData, index) => (
            <div key={index} className='flex flex-col space-y-2 w-full lg:max-w-lg md:max-w-md border-b pb-4'>
              <button onClick={() => toggleItem(index)} className='flex flex-row items-center justify-between w-full hover:bg-gray-50 p-2 rounded-lg transition-colors'>
                <div className='flex flex-row items-center space-x-4'>
                <p className='font-serif font-bold'>{faqData.number}</p>
                <h2 className='font-serif font-bold text-lg text-left'>{faqData.question}</h2>
                </div>
                {activeIndex === index ? (
                  <FaMinus className='text-xl font-bold text-gray-600 min-w-[20px]' />
                ) : (
                  <FaPlus className='text-xl font-bold text-gray-600 min-w-[20px]' />
                )}
              </button>
              {activeIndex === index && (
                <div className='pl-12 pr-4 animate-fadeIn'>
                  <p className='text-gray-600 leading-relaxed'>{faqData.answer}</p>
                </div>)}
            </div>
          ))}
        </div>
    </section>
  )
}

export default LearnPage