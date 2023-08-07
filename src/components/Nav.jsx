import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="py-2 px-4 h-[10vh] flex justify-between w-full items-center z-40 shadow-lg">
      <div className="flex justify-center items-center w-[20%] gap-5">
        <img className="flex sm:w-8 sm:h-8" src={Logo} alt="logo" />
        <span className="font-[500] hidden md:flex text-sm"> EduHub</span>
      </div>

      <div className="flex justify-around items-center w-[50%] text-sm">
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;
