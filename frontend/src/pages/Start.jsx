import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div> {/* Parent wrapper added here */}
     <div className="relative w-screen h-[80vh] bg-fit bg-center bg-no-repeat" style={{ backgroundImage: "url('/start.png')" }}>
  {/* E-go text positioned at the top-left */}
  <h1 className="absolute top-4 left-4 text-black text-3xl font-serif font-bold">E-go</h1>
  </div>

      <div className='bg-white pb-8 py-4 px-4'>
        <h2 className='text-[30px] font-semibold'>Get Started with E-go</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>
          Continue
        </Link>
      </div>
    </div> 
  )
}

export default Start