import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
import Profile from "./pages/profile";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";

function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <div>
        {/* <Header /> */}
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/nine" element={<Nine />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
