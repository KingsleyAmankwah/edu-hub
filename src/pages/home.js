import React, { useState } from "react";
import backgroundImg from "../assets/b1.png";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
function Home() {
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat bg-[url('./assets/banner.png')] h-full w-full">
        <Header />
        <div className="flex flex-col justify-around w-full items-center lg:flex-row pt-[100px]">
          <div className="flex flex-col  w-full lg:w-1/2 space-y-6 lg:ml-12 ml-4 mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-5xl font-bold ">
              The people platform—Where interests become friendships
            </h1>
            <p className="py-2">
              Whatever your interest, from hiking and reading to networking and
              skill sharing, there are thousands of people who share it on
              Meetup. Events are happening every day—sign up to join the fun.
            </p>

            <div>
              <button
                className="rounded-[8px] py-2 bg-[#f50057] text-white px-4 inline-block  hover:no-underline"
                onClick={() => setSignUpModal(true)}
              >
                Join EduHub
              </button>
            </div>
          </div>
          <div className="w-5/6 lg:w-[27%] mb-6 lg:mb-0">
            <img src={backgroundImg} alt="" />
          </div>
        </div>
        {signUpModal && <SignUp closeModal={setSignUpModal} />}
        <div className=" w-full pl-4 sm:px-4 xl:px-0">
          <div className="text-center relative z-10 py-20">
            <h2 className="text-left sm:text-center text-2xl sm:text-3xl font-bold mb-2">
              How <span className="text-primary">EduHub</span> works
            </h2>

            <p className="text-left sm:text-center w-full sm:w-2/3 lg:w-1/2 mb-10 mx-auto">
              Meet new people who share your interests through online and
              in-person events. It’s free to create an account.
            </p>

            <div className="flex flex-col lg:flex-row sm:space-y-0">
              <div className="flex flex-col w-full items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0">
                  <img
                    alt=""
                    src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="https://www.meetup.com/find/?source=GROUPS"
                    className="text-viridian"
                  >
                    <h3 className="font-semibold text-xl mb-3">
                      Create an account
                    </h3>
                  </a>
                  <p className="text-sm text-center font-normal text-gray7">
                    Events are happening on just about any topic you can think
                    of, from online gaming and photography to yoga and hiking.
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full  items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0 i9prqz1">
                  <img
                    alt=""
                    src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="https://www.meetup.com/find/?source=GROUPS"
                    className="text-viridian"
                  >
                    <h3 className="font-semibold text-xl mb-3">Select class</h3>
                  </a>
                  <p className="text-sm text-center font-normal text-gray7">
                    Do what you love, meet others who love it, find your
                    community. The rest is history!
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0 i9prqz1">
                  <img
                    alt=""
                    src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="https://www.meetup.com/find/?source=GROUPS"
                    className="text-viridian"
                  >
                    <h3 className="font-semibold text-xl mb-3">
                      Start learning
                    </h3>
                  </a>
                  <p className="text-sm text-center font-normal text-gray7">
                    You don’t have to be an expert to gather people together and
                    explore shared interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
