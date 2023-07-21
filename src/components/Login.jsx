import React, { useState } from "react";
import googleLogo from "../assets/gogle.png";
import Spinner from "./Spinner";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "./OAuth";

function Login({ closeModal }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success(`${user.displayName}, Welcome Back!`);
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = errorMessage.match(/auth\/\S+/)[0].split("/")[1];
        const errorName = errorCode.replace(/-/g, " ");
        const capitalizedErrorName =
          errorName.charAt(0).toUpperCase() + errorName.slice(1);
        toast.error(capitalizedErrorName.slice(0, -1));
        setLoading(false);
      });
  };

  if (loading) return <Spinner />;
  return (
    <div className="z-20 fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
      <div
        className="relative w-full sm:w-[90%] lg:w-8/12 xl:w-8/12
         flex flex-col  justify-center h-[70%] bg-white  z-50 rounded-2xl"
      >
        <div
          className="absolute right-[10px] top-[10px] bg-primary cursor-pointer text-white bg-[#f50057] text-xl py-1 px-4 rounded-lg"
          onClick={() => closeModal(false)}
        >
          X
        </div>
        <div className="text-center">
          <h1 className="font-bolder text-xl sm:text-3xl">
            Welcome Back to <span className="text-primary">EduHub</span>
          </h1>
          <p>Login to your acount...</p>
        </div>

        <form
          className="flex flex-col justify-center items-center my-4"
          onSubmit={handleLogin}
        >
          <input
            className="outline-none border text-sm border-[#0000004d] mb-3 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={handleInputChange}
          />

          <input
            className="outline-none border text-sm border-[#0000004d] mb-4 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />

          {/* <div className="flex justify-start text-left my-4">
            <Link
              to="forget-password"
              className="text-sm font-bold text-left underline text-[#e60023]"
            >
              Forgot Password?
            </Link>
          </div> */}

          <div className="flex justify-center w-8/12 lg:w-4/12">
            <button
              // onClick={LoginUser}
              disabled={!email.trim() || !password.trim()}
              className="bg-[#e60023] text-white rounded-xl py-2 w-full font-bold 
                disabled:cursor-not-allowed disabled:opacity-60"
            >
              Log in
            </button>
          </div>

          <div className="my-4">
            <h1 className="font-bold ">OR</h1>
          </div>

          <div className=" w-full md:w-8/12 lg:w-4/12 mb-5">
            <OAuth />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
