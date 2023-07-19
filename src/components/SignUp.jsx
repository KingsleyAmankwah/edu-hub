import { useState } from "react";
// import googleLogo from "../assets/gogle.png";
import Spinner from "./Spinner";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import OAuth from "./OAuth";

function SignUp({ closeModal }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuth();

    if (password !== password2) {
      toast.error("The two passwords do not match!");
      setLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
        });
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        delete formDataCopy.password2;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid), formDataCopy);

        setLoading(false);
        toast.success(`${user.email} registered succesfully!`);
        navigate("/dashboard");
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
          className="absolute right-[10px] top-[10px] bg-[#f50057] cursor-pointer text-white text-xs md:text-xl py-1 px-4 rounded-lg"
          onClick={() => closeModal(false)}
        >
          X
        </div>

        <div className="text-center">
          <h1 className="font-bolder text-xl sm:text-3xl">
            Welcome to <span className="text-primary">EduHub</span>
          </h1>

          <p>SignUp to access amazing learning resources...</p>
        </div>

        <form
          className="flex flex-col justify-center items-center my-4"
          onSubmit={registerUser}
        >
          <input
            className="outline-none border text-sm border-[#0000004d] mb-3 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            name="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={handleInputChange}
          />
          <input
            className="outline-none border text-sm border-[#0000004d] mb-3 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            name="email"
            type="email"
            placeholder="Email"
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
          <input
            className="outline-none border text-sm border-[#0000004d] mb-4 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={handleInputChange}
          />

          <div className="flex justify-center w-8/12 lg:w-4/12">
            <button
              disabled={(!name && !email.trim()) || !password.trim()}
              className="bg-[#e60023] text-white rounded-xl py-2 w-full font-bold 
                disabled:cursor-not-allowed disabled:opacity-60"
            >
              SignUp
            </button>
          </div>

          <div className="my-2">
            <h1 className="font-bold ">OR</h1>
          </div>

          <div className=" w-full md:w-8/12 lg:w-4/12">
            <OAuth />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
