import { Link } from "react-router-dom";
// import { BiTimeFive, BiBook } from "react-icons/bi";
import React, { useState } from "react"; // Import useState hook

function Seven() {
  // Define state to manage the dropdown visibility
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem] mb-[10rem]">
      <header className="flex justify-between items-center">
        <p className="sm:text-3xl lg:text-5xl font-bold">Basic 7</p>
        <Link
          to="/dashboard"
          className="cursor-pointer bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
        >
          Go Back
        </Link>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-4">
        <div className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md bg-white">
          <h1 className="text-xl font-bold mb-2 text-[#f50057]">
            Strand 1: Introduction to Computing
          </h1>

          {/* Dropdown header */}
          <h3
            className="text-xl font-bold mb-2 text-[#f50057] cursor-pointer"
            onClick={() => setShowDropdown1(!showDropdown1)}
          >
            Sub Strand 1: Components of Computers
          </h3>

          {/* Dropdown content */}
          {showDropdown1 && (
            <>
              <h4 className="font-bold">Lesson 1: Output Devices</h4>
              <p>
                Welcome to our lesson on output devices! Explore the fascinating
                world of output devices. Start lesson and embark on a
                captivating learning journey that will leave you with a newfound
                appreciation for the wonders of ICT!
              </p>
              <Link
                target="_blank"
                to="https://sites.google.com/view/generation-of-computers-group1/home?authuser=0"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>

              <h4 className="font-bold">
                Lesson 2: FULL-SIZED EXTERNAL HARD DISK DRIVE
              </h4>
              <p>
                Welcome to our lesson on full sized external hard disk drive!
                Explore the fascinating world of full sized external hard disk
                drive. Start lesson and embark on a captivating learning journey
                that will leave you with a newfound appreciation for the wonders
                of ICT!
              </p>
              <Link
                target="_blank"
                to="https://myfirststututorials.blogspot.com"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>

              <h4 className="font-bold">
                Lesson 3: MICROSOFT WINDOWS 10 DESKTOP MANAGEMENT
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="https://sites.google.com/view/input-devices1/home"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>
              <h4 className="font-bold">
                Lesson 4: FILE MANAGEMENT TECHNIQUES
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="https://ite300bgroup4.edublogs.org/"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>
            </>
          )}
          <h3
            className="text-xl font-bold mb-2 text-[#f50057] cursor-pointer"
            onClick={() => setShowDropdown2(!showDropdown2)}
          >
            Sub Strand 2: TECHNOLOGY IN THE COMMUNITY
          </h3>

          {/* Dropdown content */}
          {showDropdown2 && (
            <>
              <h4 className="font-bold">
                Lesson 1: TECHNOLOGICAL TOOLS FOR LEARNING
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="https://computingclassjhs1.blogspot.com/2022/08/technology-tools.html"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>

              <h4 className="font-bold">
                Lesson 2: NEGATIVE IMPACT OF COMPUTERS AND COMPUTER USE ON THE
                ENVIRONMENT.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="https://sites.google.com/view/ite300bgroup10/home?authuser=0"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>

              <h4 className="font-bold">
                Lesson 3: WAYS TO MANAGE E-WASTE ON ENVIRONMENT
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="https://victornyaaba.blogspot.com/2022/08/ways-to-manage-e-waste-on-environment.html"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>
              <h4 className="font-bold">
                Lesson 4: CREATE A COMPONENT FROM DISPOSED OF COMPUTER
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="https://sites.google.com/view/ite-300-c-group12/home"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>
            </>
          )}
          <h3
            className="text-xl font-bold mb-2 text-[#f50057] cursor-pointer"
            onClick={() => setShowDropdown3(!showDropdown3)}
          >
            Sub Strand 3: HEALTH AND SAFETY
          </h3>

          {/* Dropdown content */}
          {showDropdown3 && (
            <>
              <h4 className="font-bold">
                Lesson 1: HEALTH AND SAFETY IN THE USE OF ICT TOOLS
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ab porro ratione exercitationem dolorum, odit necessitatibus
                assumenda officia, dolor voluptatem quam suscipit rerum
              </p>
              <Link
                target="_blank"
                to="http://groupiteb15.edublogs.org"
                className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
              >
                Start Lesson
              </Link>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Seven;
