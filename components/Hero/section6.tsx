import React from 'react'

const section6 = () => {
  return (
    <>
       <div className="relative mt-10 px-2 bg-white">
        <img src="BG-F.png " alt="" />

        <div
          className="
          absolute 
          line-clamp-3
          -top-[7%]
          sm:left-[13%] 
          sm:w-[40%]
          "
        >
          <h1 className="font-bold text-[#FF7300] text-xl">
            Many Ways To Redeem
          </h1>
          <p className="font-bold text-lg sm:text-2xl ">
            Get vouchers, coupons and cash through the following platforms.
          </p>
        </div>
        <div
          className="
        sm:w-[74%]
        w-[90%] 
          absolute 
          sm:top-[20%]
          top-[50%] 
          sm:left-[13%]
          "
        >
          <div
            className="grid 
          grid-cols-4 
          gap-2 
          h-[5vh]
          justify-between "
          >
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[5vh] justify-center  mx-5 my-3"
                src="logo-6.png"
                alt=""
              />
            </div>
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[5vh] justify-center  mx-5 my-3"
                src="logo-2.png"
                alt=""
              />
            </div>
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[5vh] justify-center  mx-5 my-3"
                src="logo-5.png"
                alt=""
              />
            </div>
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[5vh] justify-center  mx-5 my-3"
                src="logo-3.png"
                alt=""
              />
            </div>
            
          </div>
        </div>

        <div
          className="
          absolute 
          line-clamp-3
          sm:top-[50%]
          top-[90%]
          left-[13%] 
          w-[74%]"
        >
          <h1 className="font-bold text-[#FF7300] text-xl">
            Our Members
          </h1>
          <div className="grid md:grid-cols-3 gap-2 justify-between">
            <div className="border rounded-lg p-5">
              <h1 className="font-bold text-md ">"The Best SurveyBite"</h1>
              <p className="text-sm">"As a hardcore basketball fan, SurveyByte allows me to influence the sports gear I love, and they even pay me for it! 100% win-win. I absolutely recommend you try it for yourself. "
              </p>
              <p><b>- Kevin</b></p>
            </div>
            <div className="border rounded-lg p-5">
              <h1 className="font-bold text-md ">"The Best SurveyBite"</h1>
              <p className="text-sm">"As a hardcore basketball fan, SurveyByte allows me to influence the sports gear I love, and they even pay me for it! 100% win-win. I absolutely recommend you try it for yourself. "
              </p>
              <p><b>- Kevin</b></p>
            </div>
            <div className="border rounded-lg p-5">
              <h1 className="font-bold text-md ">"The Best SurveyBite"</h1>
              <p className="text-sm">"As a hardcore basketball fan, SurveyByte allows me to influence the sports gear I love, and they even pay me for it! 100% win-win. I absolutely recommend you try it for yourself. "
              </p>
              <p><b>- Kevin</b></p>
            </div>

          </div>
        </div>
      </div>
      </>
  )
}

export default section6