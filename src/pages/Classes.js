import React from "react";
import Header from "../components/Header";
import backgroundImg from "../assets/8.jpg";
import class1Image from "../assets/4.jpg";
import class2Image from "../assets/6.jpg";
import class3Image from "../assets/5.jpg";

import { Link } from "react-router-dom";

function Classes() {
  return (
    <div>
      <Header />

      <div
        className="flex flex-col w-full h-[100vh] items-center lg:flex-row pt-[100px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        <div className="flex flex-col text-white w-full lg:w-[60%] p-2 lg:pl-[8rem] relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-8">
            The Education Hub—Where Knowledge Grows and Friendships Flourish
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed mb-8">
            Whatever your academic interest, from mathematics and science to
            literature and arts, there are thousands of learners like you on
            EduHub. Courses are available every day—sign up to embark on your
            learning journey.
          </p>

          <Link to="/">
            <button className="rounded-lg py-2 px-6 bg-[#f50057] text-white hover:bg-opacity-90 transition duration-300">
              Go Back
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Our Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Class 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={class1Image} // Replace with the path to your class image
              alt="Class 1"
              className="w-full h-[200px] object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Basic 7</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi nulla, cursus ac purus nec.
            </p>
            <Link to="/seven">
              <button className="mt-3 bg-[#f50057] text-white py-1 px-3 rounded-md hover:bg-opacity-90 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Class 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={class2Image} // Replace with the path to your class image
              alt="Class 2"
              className="w-full h-[200px] object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Basic 8</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi nulla, cursus ac purus nec.
            </p>
            <Link to="/eight">
              <button className="mt-3 bg-[#f50057] text-white py-1 px-3 rounded-md hover:bg-opacity-90 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
          {/* Class 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={class3Image} // Replace with the path to your class image
              alt="Class 2"
              className="w-full h-[200px] object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Basic 9</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi nulla, cursus ac purus nec.
            </p>
            <Link to="/nine">
              <button className="mt-3 bg-[#f50057] text-white py-1 px-3 rounded-md hover:bg-opacity-90 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Add more classes here */}
        </div>
      </div>

      <footer className="bg-[#333] text-white text-center py-4">
        <p>
          &copy; 2023 <span className="text-[#f50057]">Edu</span>Hub. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Classes;
