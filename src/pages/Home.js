import { Link } from "react-router-dom";
import backgroundImg from "../assets/7.jpg";
import contactImage from "../assets/about.jpg";
import aboutImg from "../assets/3.jpg";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <div className="w-full h-full">
        <Nav />

        <div
          className="flex flex-col w-full h-[100vh] items-center lg:flex-row pt-[100px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

          <div className="flex flex-col text-white w-full lg:w-[60%] p-4 lg:pl-[8rem] relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-8">
              iEduGH- Improved COMPUTING Educational Experience; anytime and
              anywhere
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              COMPUTING EDUCATION GHANA is Hub that provides a source of
              learning experiences for learners and teaching resources. We
              ensure increase the success of students in their learning journey
              of COMPUTING
            </p>

            <Link to="/classes">
              <button className="rounded-lg py-2 px-6 bg-[#f50057] text-white hover:bg-opacity-90 transition duration-300">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>

        <div className=" w-full pl-4 sm:px-4 xl:px-0">
          <div className="text-center relative z-10 py-20">
            <h2 className="text-left sm:text-center text-2xl sm:text-3xl font-bold mb-2">
              How <span className="text-[#f50057]">iEdu</span>GH Works
            </h2>

            <p className="text-left sm:text-center w-full sm:w-2/3 lg:w-1/2 mb-10 mx-auto text-[#f50057]">
              Explore courses and topics which aligns with your interests
              online.
            </p>

            <div className="flex flex-col lg:flex-row sm:space-y-0">
              <div className="flex flex-col w-full items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0">
                  <img
                    alt="Create_Account_Image"
                    src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-3 text-[#f50057]">
                    Create an account
                  </h3>

                  <p className="text-sm text-center font-normal text-gray7">
                    It’s free to create an account. SignUp now to embark on your
                    learning journey
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full  items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0 i9prqz1">
                  <img
                    alt="Pick_Class_Image"
                    src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <Link to="/classes">
                    <h3 className="font-semibold text-xl mb-3 text-[#f50057]">
                      Select class
                    </h3>
                  </Link>

                  <p className="text-sm text-center font-normal text-gray7">
                    Pick a class you want to join
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0 i9prqz1">
                  <img
                    alt="Start_learning_Image"
                    src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-3 text-[#f50057]">
                    Start learning
                  </h3>

                  <p className="text-sm text-center font-normal text-gray7">
                    At the comfort of your home, you can learn at your own
                    pace...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-left p-6 sm:text-center text-2xl sm:text-3xl font-bold mb-2">
          About <span className="text-[#f50057]">iEdu</span>GH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[5rem] items-center">
          <div className="w-full h-full">
            <img
              src={aboutImg}
              alt="About_image"
              className="object-cover h-full w-full rounded-lg shadow-md"
            />
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-left text-xl sm:text-3xl font-bold mb-2">
              <span className="text-[#f50057]">iEdu</span>GH
            </h2>
            <p className="text-lg text-gray-700">
              iEduGH; COMPUTING EDUCATION GHANA is Hub that provides a source of
              learning experiences for learners and teaching resources. We
              ensure increase the success of students in their learning journey
              of COMPUTING. Our platform offers access to digital textbooks,
              interactive videos, and educational games that can help to engage
              students and make learning more enjoyable. We seek to balance
              between pedagogical flexibility for instructors and dynamic
              experiences for students with individual and diverse leaning
              needs. Our platform has learning effectiveness tools that creates
              flexible, efficient environments that support present INFORMATION
              COMMUNICATION AND TECHNOLOGY education as it’s happening instead
              of asking education to fit the technology.
            </p>
          </div>
        </div>

        <h2 className="text-left sm:text-center text-2xl sm:text-3xl font-bold mb-2">
          Contact <span className="text-[#f50057]">Us</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-[#f50057]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <p>lastminutenyame@example.com</p>
            </div>
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-[#f50057]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"
                  />
                </svg>
              </div>
              <p>Kumasi, Ghana</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-[#f50057]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <p>0557511017</p>
            </div>
          </div>

          <div className="w-full h-full flex items-center">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <footer className="bg-[#333] text-white text-center py-4">
          <p>
            &copy; 2023 <span className="text-[#f50057]">iEdu</span>GH. All
            rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;
