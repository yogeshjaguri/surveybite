export default function Home() {
  return (
    <>
      <div
        className="
                relative 
                w-[550px] 
                md:w-full 
                lg:bg-cover "
      >
          <img src="/Bg.png" alt="Bg" />

        <div className="
                      absolute 
                      top-0 
                      w-[220px] 
                      md:w-full 
                      flex justify-between 
                      md:px-[5%] 
                      lg:px-[10%]
                       ">

          <div className="flex items-center ">
            <img className="
                      h-6 
                      md:h-12 " 
                      src="/logo.png" 
                      alt="Logo" />
          </div>

          <div className="
                      flex 
                      justify-between  
                      items-center  
                      font-semibold ">

            <a className="px-2" href="">
              Home
            </a>
            <a className="px-2" href="">
              About Us
            </a>
            <a className="px-2" href="">
              Contact Us
            </a>
            <a className="px-2" href="">
              Privacy Policy
            </a>
            <a className="px-2" href="">
              FAQs
            </a>
          </div>
          <div className="
                      flex 
                      justify-between 
                      py-3
                      items-center">
            <img
              className="
                      px-2 
                      cursor-pointer "
              src="/lang.svg"
              alt="language"
            />

            <div className="
                    border-l 
                    border-black 
                    p-2">

              <button className="
                    px-2 
                    border 
                    border-black 
                    h-7 
                    rounded-md 
                    text-sm">
                Login
              </button>
              <button className="
                    mx-2 
                    px-2 
                    bg-[#FE5900] 
                    h-7 
                    rounded-md 
                    text-sm 
                    font-semibold 
                    text-white">
                Join Us
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute
            top-[20%]
            left-[10%]
            font-Oxanium
            font-semibold
            leading-none"
        >
          <h1
            className="
            text-white 
              md:text-[5rem]
              "
          >
            You Respond.
          </h1>
          <h1
            className="
            text-[#FF7300]
            md:text-[5rem]
            "
          >
            We Reward
          </h1>
          <p
            className="
            w-[520px]
            font-Oxanium
            text-lg
            font-semibold"
          >
            Unleash Your Sports Wisdom with SurveyByte – Score a $2 Sign-Up
            Bonus Today.
          </p>
          <button
            className="
            text-sm 
            p-2 
            font-[Roboto] 
            rounded-lg
          text-white 
          bg-[#FF7300]"
          >
            Get Paid Today
          </button>
        </div>
        <div className="
             absolute 
             bottom-0 ">
          <img src="/image.png" alt="image" />
        </div>
      </div>


      {/* About Us ----------------------------------------------------------------------------------------------------------- */}

      <div className=" 
              bg-cover 
              relative mb-10 ">
        <img src="/Bg-a.png" alt="Bg" />

        <img
          className="absolute
              top-[20%]
              left-[20%]"
          src="/Image-1.png"
          alt="img"
          width="300px"
        />

        <img
          className=" 
              absolute
              w-80 h-96 z-10
              -bottom-[10%]
              right-[13%]"
          src="/Image-2.png"
          alt="img"
        />

        <div className="
              absolute 
              top-[20%] 
              right-[10%] 
              w-96 ">
          <h1 className="
              text-[#FF7300] 
              font-Oxanium 
              font-bold">About Us</h1>
          <p>
            Passionate sports fans, it's time to level up! Your enthusiasm and
            knowledge for sports have the potential to not just fuel your
            passion but also fatten your wallet. SurveyByte offers a chance to
            connect your love for sports with earning potential.
          </p>
          <p className="
              font-bold 
              pt-2">Your opinion counts - and pays!</p>
        </div>
      </div>


      {/*  section - 3 ----------------------------------------------------------------------------------------------------*/}

      <div className="
              overflow-hidden">
        <div className=" 
              bg-cover 
              relative 
              z-10  
              mb-10 ">
          <img src="/imagee.png" alt="Bg" />

          <div
            className="
              absolute 
              -top-[10%] "
          >
            <img src="/up.png" alt="img" />
          </div>
          <div
            className=" 
              absolute
              -bottom-[10%]
            "
          >
            <img src="/down.png" alt="img" />
          </div>

          <div className="
              absolute 
              top-[5%] 
              mx-56  
              flex-col 
              text-center ">
            <h1 className="
              capitalize 
              text-[#FF7300] 
              font-Oxanium 
              font-bold">
              Embrace Flexibility: Always-On Access
            </h1>
            <p className="
              text-white 
              font-[Roboto] 
              text-[20px]">
              Your favorite game doesn't have an off-season, why should your
              earning potential? Whether it's a post-game analysis or a halftime
              breather, our surveys are designed to fit into a busy lifestyle.
               Share your views anytime, anywhere. Your Game, Your Rules. From
              sports gear to team strategies, from athlete diets to event
              updates - choose from topics that pique your interest. Your sports
              insights, your earning prospects.
            </p>
          </div>
          <div className="
              absolute 
              -bottom-[6%] 
              mx-52 ">
            <div className="
              grid 
              grid-flow-col 
              gap-4">
              <div className="
              shadow-md 
              bg-white 
              rounded-lg 
              pb-3">
                <img src="/pc.png" 
                className="rounded-t-lg" />
                <div className="p-4">
                  <h1 className="font-bold">Participate from Anywhere!</h1>
                  <p className="text-sm font-[Roboto]">
                    SurveyByte allows you to complete exciting surveys anywhere
                    – during down-time, at home, or even on the go. In minutes,
                    you can be earning from anywhere across the globe.
                  </p>
                </div>
              </div>
              <div className="shadow-md bg-white rounded-lg ">
                <img src="/mobile.png" className="rounded-t-lg" />
                <div className="p-4">
                  <h1 className="font-bold"> Data Security</h1>
                  <p className="text-sm font-[Roboto]">
                    We don’t take it lightly. At SurveyByte you can rest assured
                    your data is safe and secure. Once you sign up, we’ll only
                    use your data for optimising surveys and alerting you to new
                    and exciting offers!
                  </p>
                </div>
              </div>
              <div className="shadow-md bg-white rounded-lg ">
                <img src="/gym.png" className="rounded-t-lg" />
                <div className="p-4">
                  <h1 className="font-bold">Your Insights Matter</h1>
                  <p className="text-sm font-[Roboto]">
                    SurveyByte allows you to complete exciting surveys anywhere
                    – during down-time, at home, or even on the go. In minutes,
                    you can be earning from anywhere across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* -- */}
      <div className=" bg-cover relative mb-[8%]">
        <img src="/light-Bg.png" alt="Bg" />

        <div
          className="absolute
            top-[10%]
            left-[14%]"
        >
          <h1 className="text-[#FF7300] font-Oxanium text-[24px] font-bold">
            How it Works
          </h1>
          <h1 className="text-black font-sans font-semibold text-[30px] line-clamp-3">
            Winning Strategies Keep Scoring
          </h1>
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
            -bottom-[18%]
            right-[18%]
            "
        >
          <div className="grid grid-flow-row w-14 h-14 ">
            <div className="flex justify-center h-12 relative top-3">
              <img src="Group 13.svg" alt="" />
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
            <h1 className="text-[#FF7300] font-Oxanium font-bold">
              {" "}
              Register With Us
            </h1>
            <p className="text-xs w-[350px] ">
              Each survey completion is akin to scoring a point in your favorite
              game. Watch as your earnings rise with each unique insight you
              provide. Turn your sports wisdom into cash rewards. Make the Play:
              Have a say in the products and trends shaping the sporting world.
              Your opinions have the power to change the game. Influence the
              sports market with every survey you complete.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="  h-[100vh] bg-[#85B57C] 
        mt-10 bg-cover "
        >
          <img className="absolute  -top-[2%]   " src="/top.png" alt="Bg" />
          <img
            className="absolute right-0 bottom-0 w-[50vw]  "
            src="/fitness.png"
            alt="Bg"
          />
          <img className="absolute  bottom-0   " src="/bot.png" alt="Bg" />
        </div>

        <div className="absolute top-[10%] left-[10%] w-[39%]">
          <h1 className="font-bold text-xl">Ready to Take The Shot</h1>
          <p className="text-white">
            Put your sporting wisdom to work and earn on your terms. Join
            SurveyByte today and kick-off your earnings with a $2 sign-up bonus.
          </p>
          <div className=" mt-5">
            <label className="text-white">
              {" "}
              first Name
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full h-10 rounded-lg border-2 mb-2 bg-[#F0F0F0]"
              />
            </label>
            <label className="text-white">
              {" "}
              first Name
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full mb-2 h-10  rounded-lg border-2 bg-#F0F0F0"
              />
            </label>
            <label className="text-white">
              {" "}
              first Name
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full h-10 mb-2  rounded-lg border-2 bg-#F0F0F0"
              />
            </label>
            <label className="text-white">
              {" "}
              first Name
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full h-10 mb-2 rounded-lg border-2 bg-#F0F0F0"
              />
            </label>
            <label className="text-white">
              {" "}
              first Name
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full h-10 rounded-lg border-2 bg-#F0F0F0"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="relative mt-20 px-2 bg-white">
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
                className=" bg-white h-[2vh] sm:h-[6vh] justify-center my-3"
                src="logo-6.png"
                alt=""
              />
            </div>
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[6vh] justify-center  my-3"
                src="logo-2.png"
                alt=""
              />
            </div>
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[6vh] justify-center  mx-5 my-3"
                src="logo-5.png"
                alt=""
              />
            </div>
            <div className="border flex items-center justify-center rounded-lg bg-white">
              <img
                className=" bg-white h-[2vh] sm:h-[6vh] justify-center  mx-5 my-3"
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
          <h1 className="font-bold text-[#FF7300] text-xl">Our Members</h1>
          <div className="grid md:grid-cols-3 gap-2 justify-between">
            <div className="border rounded-lg p-5">
              <h1 className="font-bold text-md ">"The Best SurveyBite"</h1>
              <p className="text-sm">
                "As a hardcore basketball fan, SurveyByte allows me to influence
                the sports gear I love, and they even pay me for it! 100%
                win-win. I absolutely recommend you try it for yourself. "
              </p>
              <p>
                <b>- Kevin</b>
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h1 className="font-bold text-md ">"The Best SurveyBite"</h1>
              <p className="text-sm">
                "As a hardcore basketball fan, SurveyByte allows me to influence
                the sports gear I love, and they even pay me for it! 100%
                win-win. I absolutely recommend you try it for yourself. "
              </p>
              <p>
                <b>- Kevin</b>
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h1 className="font-bold text-md ">"The Best SurveyBite"</h1>
              <p className="text-sm">
                "As a hardcore basketball fan, SurveyByte allows me to influence
                the sports gear I love, and they even pay me for it! 100%
                win-win. I absolutely recommend you try it for yourself. "
              </p>
              <p>
                <b>- Kevin</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative bg-[#85B57C] h-56">
          <div className="absolute top-0">
            <img src="white_top.png " alt="" />
          </div>

          <div className="grid grid-cols-3 justify-between text-white items-center absolute bottom-[5%] w-full px-[5%] line-clamp-3">
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
              <img src="fb.svg" />
              Facebook
            </div>
          </div>
        </div>
        <p className="bg-[#85B57C] text-white border-t text-sm py-1 flex justify-center">
          © 2023. SurveyByte is owned by Azure Knowledge Corporation. All Rights
          reserved.
        </p>
      </div>
    </>
  );
}
