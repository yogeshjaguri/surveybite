import React from 'react'

const section4 = () => {
  return (
    <>
     <div>
        <div className=" bg-cover relative">
          <img src="/light-Bg.png" alt="Bg" />

          <div
            className="absolute
            top-[10%]
            left-[14%]"
          >
            <h1 className="text-[#FF7300] font-Oxanium text-[24px] font-bold">How it Works</h1>
            <h1 className="text-black font-sans font-semibold text-[30px] line-clamp-3">Winning Strategies Keep Scoring</h1>
          </div>

          <div
            className="absolute
            -bottom-[18%]
            left-[20%]"
          >
            <img src="/runner.png" alt="img" width="300px" />
          </div>
          <div
            className="flex absolute
        w-[450px] h-96 z-10
            top-[30%]
            right-[18%]
            "
          >
            <div className="grid grid-flow-row w-14 h-14 ">
            <div className="flex justify-center h-14 relative top-3"> 
            <img   src="Group 13.svg" alt="" />
            </div>
            <div className="z-10 p-2 bg-[#9DC795] rounded-md h-14">   
            <img src="/signup 1.png" alt="img" />
            </div>
            <div className="h-14 flex justify-center"> 
            <img src="Group 14.svg" alt="" />
            </div>
            <div className="bg-[#9DC795]  rounded-md h-14 p-2">   
            <img src="/checking.png" alt="img" />
            </div>
            <div className="h-14 flex justify-center"> 
            <img src="Group 14.svg" alt="" />
            </div>
            <div className="bg-[#9DC795] rounded-md h-14 p-2">   
            <img src="/money.png" alt="img" />
            </div>
            </div>
          
          <div className="mt-12 pl-6">
            <h1 className="text-[#FF7300] font-Oxanium font-bold"> Register With Us</h1>
            <p className="text-xs w-[350px] ">
            Each survey completion is akin to scoring a point in your favorite game. Watch as your earnings rise with each unique insight you provide. Turn your sports wisdom into cash rewards. Make the Play: Have a say in the products and trends shaping the sporting world. Your opinions have the power to change the game. Influence the sports market with every survey you complete.
            </p>
            
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default section4