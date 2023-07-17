import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { FaUserLock } from "react-icons/fa";
// import { FiSettings } from "react-icons/fi";
// import { BiLogOutCircle } from "react-icons/bi";
import { getAuth } from "firebase/auth";

import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="py-2 px-4 h-[10vh] flex justify-between w-full items-center z-40 shadow-lg">
      <div className="flex justify-center items-center w-[20%] gap-5">
        <img className="flex" src={Logo} alt="" />
        <span className="font-[500] hidden md:flex text-sm"> EduHub</span>
      </div>

      <div className="flex justify-around items-center w-[50%] text-sm">
        <Link to="/add-group">Basic 7</Link>
        <Link to="/add-group">Basic 8</Link>
        <Link to="/add-group">Basic 9</Link>
      </div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
};
const UserProfile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const [isMenu, setIsMenu] = useState(false);

  const showMenu = () => {
    setIsMenu((menu) => !menu);
  };

  return (
    <div className="flex items-center  group relative">
      <div
        onClick={showMenu}
        className="flex flex-col items-end font-sans cursor-pointer"
      >
        {/* <p className="text-active hidden lg:flex">{user && user.name}</p> */}
        <p className="text-[#888A91] text-sm capitalize hidden lg:flex">
          {/* {user && user.role} */}
        </p>
      </div>
      <div
        className="w-10 h-10 flex items-center justify-center border border-active-bg rounded-full cursor-pointer"
        onClick={showMenu}
      >
        <img
          //   src={user && user.photo}
          alt="User profile"
          className="w-[90%] h-[90%] border border-active-bg rounded-full"
        />
        {isMenu && (
          <div className=" bg-white text-black rounded-lg shadow-xl gap-0  flex-col absolute right-0 z-50 top-14 p-2 font-sans flex min-w-[12rem]">
            <div className="w-full h-[2px] my-2 bg-active-bg"></div>
            <Link to="/profile">
              <div className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2">
                {/* <FaUserLock className="text-lg" /> */}
                <p>Profile</p>
              </div>
            </Link>

            <div>
              <Link to="/settings">
                <div className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2">
                  {/* <FiSettings className="text-lg" /> */}
                  <p>Settings</p>
                </div>
              </Link>
            </div>

            <div
              onClick={onLogout}
              className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2"
            >
              {/* <BiLogOutCircle className="text-lg" /> */}
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
