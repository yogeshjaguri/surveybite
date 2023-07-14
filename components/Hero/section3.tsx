import React from 'react'

const section3 = () => {
  return (
    <>
    <div className="py-24 bg-white ">
        <div className=" bg-cover relative ">
          <img src="/imagee.png" alt="Bg" />

          <div
            className="absolute 
            -top-12 "
          >
            <img src="/up.png" alt="img" />
          </div>
          <div
            className=" absolute
        
            -bottom-10
            "
          >
            <img src="/down.png" alt="img" />
          </div>

          <div className="absolute top-10 mx-56  flex-col text-center ">
            <h1 className="capitalize text-[#FF7300] font-Oxanium font-bold">Embrace Flexibility: Always-On Access</h1>
            <p className="text-white font-[Roboto] text-[20px]">
            Your favorite game doesn't have an off-season, why should your earning potential? Whether it's a post-game analysis or a halftime breather, our surveys are designed to fit into a busy lifestyle.
             Share your views anytime, anywhere. Your Game, Your Rules.
            From sports gear to team strategies, from athlete diets to event updates - choose from topics that pique your interest. Your sports insights, your earning prospects.
            </p>
          </div>
          <div className="absolute -bottom-12 mx-52">
            <div className="grid grid-flow-col gap-4">
            <div className="shadow-lg bg-white rounded-lg ">
              <img src="/pc.png" className="rounded-t-lg"/>
              <div className="p-4">
              <h1 className="font-bold">Participate from Anywhere!</h1>
              <p className="text-sm font-[Roboto]">SurveyByte allows you to complete exciting surveys anywhere – during down-time, at home, or even on the go. In minutes, you can be earning from anywhere across the globe.</p>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-lg ">
              <img src="/mobile.png" className="rounded-t-lg"/>
              <div className="p-4">
              <h1 className="font-bold"> Data Security</h1>
              <p className="text-sm font-[Roboto]">We don’t take it lightly. At SurveyByte you can rest assured your data is safe and secure. Once you sign up, we’ll only use your data for optimising surveys and alerting you to new and exciting offers!</p>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-lg ">
              <img src="/gym.png" className="rounded-t-lg"/>
              <div className="p-4">
              <h1 className="font-bold">Your Insights Matter</h1>
              <p className="text-sm font-[Roboto]">SurveyByte allows you to complete exciting surveys anywhere – during down-time, at home, or even on the go. In minutes, you can be earning from anywhere across the globe.</p>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default section3