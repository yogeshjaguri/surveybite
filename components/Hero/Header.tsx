import React from 'react'

const Header = () => {
  return (
    <>
    <div className="flex justify-between md:px-[10%] py-2 ">
    <div className=" items-center ">
      <img className="h-12 m-2" src="/logo.png" alt="Logo" />
    </div>
    <div className="flex justify-between  items-center  font-semibold ">
      <a className="px-2" href="">Home</a>
      <a className="px-2" href="">About Us</a> 
      <a className="px-2" href="">Contact Us</a> 
      <a className="px-2" href="">Privacy Policy</a> 
      <a className="px-2" href="">FAQs</a>
    </div>
    <div className="flex justify-between py-4 items-center">
      <img className="px-2 cursor-pointer " src="/lang.svg" alt="language" />      
      
      <div className="border-l border-black p-2">
        <button className="px-2 border border-black h-7 rounded-md text-sm">Login</button>
        <button className="mx-2 px-2 bg-[#FE5900] h-7 rounded-md text-sm font-semibold text-white">Join Us</button>
      </div>
        </div>
    </div>
    </>
  )
}

export default Header