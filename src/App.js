import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
import Profile from "./pages/profile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <div>
        {/* <Header /> */}
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
