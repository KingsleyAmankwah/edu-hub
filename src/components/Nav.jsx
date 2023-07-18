import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaUserLock } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import { getAuth } from "firebase/auth";

import Logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Nav = () => {
  return (
    <div className="py-2 px-4 h-[10vh] flex justify-between w-full items-center z-40 shadow-lg">
      <div className="flex justify-center items-center w-[20%] gap-5">
        <img className="flex sm:w-8 sm:h-8" src={Logo} alt="logo" />
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
  const [user, setUser] = useState(null);
  const [isMenu, setIsMenu] = useState(false);

  const onLogout = () => {
    auth.signOut();
    toast.success(`Logged out successfully!`);
    navigate("/");
  };

  const showMenu = () => {
    setIsMenu((menu) => !menu);
  };

  useEffect(() => {
    // Example: Fetch user details from authentication provider
    // Replace with your own logic to fetch the user details
    const user = auth.currentUser;
    setUser(user);
  }, [auth.currentUser]);

  const renderUserDetails = () => {
    if (user && user.photoURL) {
      return (
        <img
          src={user.photoURL}
          alt="User profile"
          className="w-[90%] h-[90%] border border-active-bg rounded-full"
        />
      );
    } else if (user && user.email) {
      const initials = user.email.split("@")[0].slice(0, 2).toUpperCase();
      return (
        <div className="flex items-center justify-center w-[90%] h-[90%] border border-active-bg rounded-full bg-gray-300">
          <p className="text-black text-xl font-bold">{initials}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center  group relative">
      <div
        onClick={showMenu}
        className="flex flex-col items-end font-sans cursor-pointer"
      ></div>
      <div
        className="w-10 h-10 flex items-center justify-center border border-active-bg rounded-full cursor-pointer"
        onClick={showMenu}
      >
        {renderUserDetails()}
        {isMenu && (
          <div className=" bg-white text-black rounded-lg shadow-xl gap-0  flex-col absolute right-0 z-50 top-14 p-2 font-sans flex min-w-[12rem]">
            <div className="w-full h-[2px] my-2 bg-active-bg"></div>
            <Link to="/profile">
              <div className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2">
                <FaUserLock className="text-lg" />
                <p>Profile</p>
              </div>
            </Link>

            <div>
              <Link to="/settings">
                <div className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2">
                  <FiSettings className="text-lg" />
                  <p>Settings</p>
                </div>
              </Link>
            </div>

            <div
              onClick={onLogout}
              className="flex items-center gap-2 text-active cursor-pointer hover:bg-active-bg p-2"
            >
              <BiLogOutCircle className="text-lg" />
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
