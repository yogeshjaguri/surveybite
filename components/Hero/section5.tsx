import React from 'react'

const section5 = () => {
  return (
    <>
     <div className="bg-white relative">
        <div className="  h-[100vh] bg-[#85B57C] 
        mt-10 bg-cover ">
          <img className="absolute  top-0   " src="/top.png" alt="Bg" />   
          <img className="absolute right-0 bottom-0 w-[50vw]  " src="/fitness.png" alt="Bg" />   
          <img className="absolute  bottom-0   " src="/bot.png" alt="Bg" />   
        </div>

        <div className="absolute top-[10%] left-[10%] w-[39%]">
          <h1 className="font-bold text-xl">Ready to Take The Shot</h1>
          <p className="text-white">Put your sporting wisdom to work and earn on your terms. Join SurveyByte today and kick-off your earnings with a $2 sign-up bonus.</p>
          <div className=" mt-5">
          <label className="text-white"> first Name 
          <input type="text" placeholder="Enter Your Email" className="w-full h-10 rounded-lg border-2 mb-2 bg-[#F0F0F0]"/>
          </label>
          <label className="text-white"> first Name 
          <input type="text" placeholder="Enter Your Email" className="w-full mb-2 h-10  rounded-lg border-2 bg-#F0F0F0"/>
          </label>
          <label className="text-white"> first Name 
          <input type="text" placeholder="Enter Your Email" className="w-full h-10 mb-2  rounded-lg border-2 bg-#F0F0F0"/>
          </label>
          <label className="text-white"> first Name 
          <input type="text" placeholder="Enter Your Email" className="w-full h-10 mb-2 rounded-lg border-2 bg-#F0F0F0"/>
          </label>
          <label className="text-white"> first Name 
          <input type="text" placeholder="Enter Your Email" className="w-full h-10 rounded-lg border-2 bg-#F0F0F0"/>
          </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default section5