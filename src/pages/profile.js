import { Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function Profile() {
  const auth = getAuth();
  // const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
      // Update in Firestore
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Could not update profile");
    }
  };

  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem]  mb-[10rem]">
      <header className="flex justify-between items-center">
        <p className="sm:text-3xl lg:text-5xl font-bold">My Profile</p>
        <Link
          to="/dashboard"
          className="cursor-pointer bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
        >
          Go Back
        </Link>
      </header>

      <main>
        <div className="mt-4 sm:mt-8 flex justify-between max-w-[500px]">
          <p className="font-[600]">Personal Details</p>
          <p
            className="font-[600] text-[#f50057] cursor-pointer"
            onClick={() => {
              if (changeDetails) {
                onSubmit();
              }
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "Update" : "Edit"}
          </p>
        </div>

        <div className="max-w-[500px] p-4 bg-white mt-2 sm:mt-4">
          <form>
            <input
              type="text"
              id="name"
              className={`${
                changeDetails && `bg-[rgba(44,44,44,0.1)]`
              } font-[600] h-[3rem] w-full border-0 outline-0`}
              name="name"
              value={name}
              disabled={!changeDetails}
              onChange={onChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              disabled
              placeholder="Email"
              className={`font-[600] h-[3rem] w-full border-0 outline-0`}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;
