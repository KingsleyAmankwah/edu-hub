import Logo from "../assets/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-2 px-4 h-[10vh] flex justify-between w-full items-center z-40 shadow-lg">
      <div className="flex justify-center items-center w-[20%] gap-5">
        <img className="hidden md:flex" src={Logo} alt="EduHub_Logo" />
        <span className="font-[500] text-sm"> EduHub</span>
      </div>

      <div className="flex justify-around items-center w-[50%] text-sm">
        <Link to="/seven" className="hover:text-[#f50057]">
          Basic 7
        </Link>
        <Link to="/eight" className="hover:text-[#f50057]">
          Basic 8
        </Link>
        <Link to="/nine" className="hover:text-[#f50057]">
          Basic 9
        </Link>
      </div>
    </div>
  );
};

export default Header;
