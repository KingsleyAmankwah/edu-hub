import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";
import Test from "./pages/Test";
import Classes from "./pages/Classes";

function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/test" element={<Test />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
