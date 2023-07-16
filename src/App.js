import { Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <div>
        <Header />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
