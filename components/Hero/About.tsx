import React from 'react'

const About = () => {
  return (
    <>
   <div className="">
        <div className=" bg-cover relative">
          <img src="/Bg-a.png" alt="Bg" />

          
            <img className="absolute
            top-[20%]
            left-[20%]" src="/Image-1.png" alt="img" width="300px" />
         
          
            <img className=" absolute
        w-80 h-96 z-10
            -bottom-[10%]
            right-[10%]" src="/Image-2.png" alt="img" />
          
          <div className="absolute top-[20%] right-[10%] w-96 ">
            <h1 className="text-[#FF7300] font-Oxanium font-bold">About Us</h1>
            <p>
              Passionate sports fans, it's time to level up! Your enthusiasm and
              knowledge for sports have the potential to not just fuel your
              passion but also fatten your wallet. SurveyByte offers a chance to
              connect your love for sports with earning potential.
            </p>
            <p className="font-bold pt-2">Your opinion counts - and pays!</p>
          </div>
        </div>
      </div>
     
</>
  )
}

export default About