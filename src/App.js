import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
import Profile from "./pages/profile";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";

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
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
