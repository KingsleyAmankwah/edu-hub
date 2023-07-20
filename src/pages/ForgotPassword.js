import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [resetMessage, setResetMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetMessageBgColor, setResetMessageBgColor] = useState("bg-red-200");
  //   let resetMessageBgColor = "bg-red-200";
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage(
        "Password reset email sent. Check your email for further instructions."
      );
      setResetMessageBgColor("bg-green-200");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setResetMessage(
          "Email not found in our system. Please make sure you entered the correct email address."
        );
      } else {
        setResetMessage("An error occurred. Please try again later.");
      }
    }

    setIsLoading(false);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full bg-blueGray-800 bg-full bg-center bg-cover">
        <div className="container sm:py-[10rem] mx-auto">
          <div className="flex justify-center items-center h-full px-6">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                <div className="sm:px-8 mb-4 text-center">
                  {resetMessage && (
                    <div
                      className={`mb-4 text-sm text-center rounded-lg p-2 ${resetMessageBgColor} text-red-700`}
                    >
                      {resetMessage}
                      <button
                        onClick={() => setResetMessage("")}
                        className="ml-2 bg-[#e60023] text-white px-4 py-2 rounded-lg font-semibold focus:outline-none"
                      >
                        X
                      </button>
                    </div>
                  )}

                  <h3 className="pt-4 mb-2 text-lg sm:text-2xl">
                    Forgot Your Password?
                  </h3>
                  <p className="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address
                    below and we'll send you a link to reset your password!
                  </p>
                </div>

                <form
                  className="sm:px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleResetPassword}
                >
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address..."
                      required
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-[#e60023] rounded-full focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      to="/"
                      className="inline-block text-sm  align-baseline text-[#e60023] "
                    >
                      Go back Home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ForgotPassword;
