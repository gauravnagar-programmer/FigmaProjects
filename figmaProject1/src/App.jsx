import { useState } from 'react'


function App() {

  return (
    <>
      <div className='bg-black text-white w-full h-100vh p-5'>
        <nav className='flex  items-center justify-between w-[700px] '>
          <h1 className=' text-3xl font-bold'>SchoolA+</h1>
          <div className='flex space-x-20 items-center '>
            <p>About</p>
            <p>Academy</p>
            <p>Features</p>
          </div>
        </nav>

        <div className='grid grid-cols-2 items-center'>
          <div className=' text-center relative space-y-3'>
            <div className=' absolute left-30 top-[-25px] bg-amber-600 p-2 rounded-full'></div>
            <h1 className='  font-bold text-5xl/15'>Your Modern <br />Online School</h1>
            <p>Grow Your carrier with SCHOOLA+ , A new way to leaning</p>
            <div className='flex items-center space-x-10 mt-5  justify-center  font-bold'>
              <button className='bg-blue-500 rounded-full px-3 py-2 '>Start Now</button>
              <button className='bg-yellow-500 rounded-full px-3 py-2 '>Register</button>
            </div>

            <div className='flex flex-col items-start mt-20 ml-5'>
              <div className='font-bold text-3xl '>Explore Courses:</div>
              <div className='grid grid-cols-4 text-gray-500  space-x-5 space-y-5 mt-5'>
                <p>BA</p>
                <p>BCA</p>
                <p>B.TECH</p>
                <p>B.COM</p>
                <p>MCA</p>
                <p>MA</p>

              </div>
            </div>
          </div>

          <div className='grid  grid-cols-3 space-y-5 w-fit space-x-5 ml-30 '>
            <div className='w-35 h-80 rounded-full '>
              <img className='h-80  rounded-full bg-center' src="/1.jpg" alt="" />
            </div>
            <div className='w-35 h-80 rounded-full relative  mt-20 '>
              <div className='p-6 bg-[#65C775] rounded-full absolute top-[-70px]'></div>
              <img className='h-80 rounded-full bg-center  ' src="/3.jpg" alt="" />
            </div>
            <div className='w-35 h-96 rounded-full mt-[-45px] relative '>
              <div className='p-4 bg-[#E7BA27] rounded-full absolute right-[-50px] top-[30px]'></div>
              <img className='h-96 rounded-full bg-center  ' src="/4.jpg" alt="" />
            </div>
            <div className='w-35 h-80 rounded-full mt-[-70px] relative'>
              <div className='p-4 bg-[#EE4B4E] rounded-full absolute left-[-50px] top-0'></div>         
              <img className='h-96 rounded-full bg-center  ' src="/2.jpg" alt="" />
            </div>
            <div className='w-35 h-80 rounded-full  '>
              <img className='h-96 rounded-full bg-center  ' src="/5.jpg" alt="" />

            </div>
            <div className='w-35 h-80 rounded-full mt-[-70px]'>
              <img className='h-96 rounded-full bg-center  ' src="/6.jpg" alt="" />

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
