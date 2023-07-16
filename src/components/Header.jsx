import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <div className="py-2 px-4 h-[10vh] flex justify-between w-full items-center z-40 shadow-lg">
      <div className="flex justify-center items-center w-[20%] gap-5">
        <img className="hidden md:flex" src={Logo} alt="EduHub_Logo" />
        <span className="font-[500] text-sm"> EduHub</span>
      </div>

      <div className="flex items-center justify-evenly w-[10rem]">
        <div className="cursor-pointer" onClick={() => setLoginModal(true)}>
          Login
        </div>
        <div
          className="rounded-[8px] cursor-pointer py-2 m-4 bg-[#f50057] px-4 text-white"
          onClick={() => setSignUpModal(true)}
        >
          Sign Up
        </div>
      </div>

      {loginModal && <Login closeModal={setLoginModal} />}
      {signUpModal && <SignUp closeModal={setSignUpModal} />}
    </div>
  );
};

export default Header;
