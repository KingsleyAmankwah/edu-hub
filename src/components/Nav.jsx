import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="py-2 px-4 h-[10vh] flex justify-between w-full items-center z-40 shadow-lg">
      <div className="flex justify-center items-center w-[20%] gap-5">
        <img className="hidden md:flex" src={Logo} alt="EduHub_Logo" />
        <span className="font-[500] text-sm"> EduHub</span>
      </div>

      <div className="flex justify-around items-center w-[50%] text-sm ">
        <a href="/" className="hover:text-[#f50057]">
          Home
        </a>
        <a href="#about" className="hover:text-[#f50057]">
          About Us
        </a>
        <a href="#contact" className="hover:text-[#f50057]">
          Contact Us
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;
