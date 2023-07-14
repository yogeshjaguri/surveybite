import React from 'react'

const footer = () => {
  return (
    <>
    <div>
      <div className="relative bg-[#85B57C] h-56">
        <div className="absolute top-0">
          <img src="white_top.png " alt="" />
        </div>

        <div className="grid grid-cols-3 justify-between text-white items-center absolute bottom-[10%] w-full px-[5%] line-clamp-3">
          
          <div className=" flex justify-between">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Privacy Policy</a>
            <a href="">FAQs</a>
          </div>
              
         
          <div className=" flex justify-center">
              <img src="logo.png" height={10} alt="" />
          </div>
          <div className="flex justify-between px-[20%]">
              <img src="insta.svg" />
                Instagram
              <img src="fb.svg"/>
                 Facebook
          </div>  
        </div>
      </div>
      <p className="bg-[#85B57C] text-white border-t text-sm py-1 flex justify-center">© 2023. SurveyByte is owned by Azure Knowledge Corporation. All Rights reserved.</p>
    </div>
    </>
  )
}

export default footer