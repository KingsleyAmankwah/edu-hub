import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";
import Classes from "./pages/Classes";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
