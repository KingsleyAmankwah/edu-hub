import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
function Dashboard() {
  const [user, setUser] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const auth = getAuth();

  useEffect(() => {
    const user = auth.currentUser;
    setUser(user);
  }, [auth.currentUser]);

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="h-full w-full">
        <div className="flex flex-col md:flex-row w-full justify-around mt-8">
          <div>
            <h1 className="font-bold text-lg md:text-3xl pb-4">
              Welcome {user && user?.displayName} 👋
            </h1>

            <Calendar value={currentDate} onChange={handleDateChange} />
          </div>

          <div>
            <span className="text-primary font-bold">Join Class</span>
            <div className="bg-[#f6f7f8] mt-4 rounded-lg p-8">
              <Link to="/groups" className="text-center underline w-full">
                Basic 7
              </Link>
            </div>
            <div className="w-full bg-[#f6f7f8] mt-4 rounded-lg p-8">
              <Link to="/groups" className="text-center underline">
                Basic 8
              </Link>
            </div>
            <div className="w-full bg-[#f6f7f8] mt-4 rounded-lg p-8">
              <Link to="/groups" className="text-center underline">
                Basic 9
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
