function Home(){
  return(
    <div className="grid items-center grid-cols-2 text-[#6F81F7] font-bold ">
      <div className=" flex flex-col items-center space-y-9 mt-5  ">
        <h1 className="text-center text-6xl ">Develop The 
            <br/>Future ! 
            </h1>

            <div className="flex items-center space-x-15">
              <button className="bg-[#0A0F2D] py-4 px-8 rounded-full">Sign-Up</button>
              <button className="bg-[#0A0F2D] py-4 px-8 rounded-full">Sign-In</button>
            </div>
      </div>
      <div className="">
        <img  src="/develpmentanimation.png" alt="" />
      </div>
      
    </div>
  )
}

export default Home