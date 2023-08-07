import { Link } from "react-router-dom";
import backgroundImg from "../assets/7.jpg";
// import slideImg from "../assets/1.jpg";
// import SignUp from "../components/SignUp";
import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "../components/Nav";

function Home() {
  // const [signUpModal, setSignUpModal] = useState(false);

  const slides = [
    {
      imgSrc:
        "https://ghana.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2021-01/20210126_093917.jpg?itok=UGNACrqY",
      title: "Slider Image 1",
      description: "Description for Slider Image 2",
    },
    {
      imgSrc:
        "https://pencilsofpromise.org/wp-content/uploads/2022/01/ghana_reading2.jpg",
      title: "Slider Image 2",
      description: "Description for Slider Image 2",
    },
    {
      imgSrc:
        "https://www.brookings.edu/wp-content/uploads/2020/07/shutterstock_592676366_small.jpg",
      title: "Slider Image 3",
      description: "Description for Slider Image 2",
    },
    // {
    //   imgSrc: { slideImg },
    //   title: "SImage",
    //   description: "Description for Slider Image",
    // },
  ];

  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat bg-[url('./assets/banner.png')]">
        {/* <Header /> */}
        <Nav />

        {/* The Carousel */}

        <div
          className="flex flex-col w-full h-[100vh] items-center lg:flex-row pt-[100px]"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col text-white  w-full lg:w-1/2 space-y-6 ml-2 sm:mb-0">
            <h1 className="text-3xl sm:text-5xl font-bold ">
              The Education Hub—Where Knowledge Grows and Friendships Flourish
            </h1>
            <p className="py-2">
              Whatever your academic interest, from mathematics and science to
              literature and arts, there are thousands of learners like you on
              EduHub. Courses are available every day—sign up to embark on your
              learning journey
            </p>

            <div>
              <Link to="/classes">
                <button className="rounded-[8px] py-2 bg-[#f50057] text-white px-4 inline-block  hover:no-underline">
                  Join EduHub Now
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="w-5/6 lg:w-[27%] mb-6 lg:mb-0">
            <img src={backgroundImg} alt="" />
          </div> */}
        </div>

        {/* <div className="w-full h-[50%]">
          <Carousel autoPlay showThumbs={false} infiniteLoop>
            {slides.map((slide, index) => (
              <div key={index}>
                <img src={slide.imgSrc} alt={slide.title} />
                <div className="legend">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}

        <div className=" w-full pl-4 sm:px-4 xl:px-0">
          <div className="text-center relative z-10 py-20">
            <h2 className="text-left sm:text-center text-2xl sm:text-3xl font-bold mb-2">
              How <span className="text-primary">EduHub</span> works
            </h2>

            <p className="text-left sm:text-center w-full sm:w-2/3 lg:w-1/2 mb-10 mx-auto">
              Explore courses and topics which aligns with your interests
              online.
            </p>

            <div className="flex flex-col lg:flex-row sm:space-y-0">
              <div className="flex flex-col w-full items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0">
                  <img
                    alt=""
                    src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="https://www.meetup.com/find/?source=GROUPS"
                    className="text-viridian"
                  >
                    <h3 className="font-semibold text-xl mb-3">
                      Create an account
                    </h3>
                  </a>
                  <p className="text-sm text-center font-normal text-gray7">
                    It’s free to create an account. SignUp now to embark on your
                    learning journey
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full  items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0 i9prqz1">
                  <img
                    alt=""
                    src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="https://www.meetup.com/find/?source=GROUPS"
                    className="text-viridian"
                  >
                    <h3 className="font-semibold text-xl mb-3">Select class</h3>
                  </a>
                  <p className="text-sm text-center font-normal text-gray7">
                    Pick a class you want to join
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full items-center space-y-2 px-6">
                <div className="mt-3 md:mt-0 i9prqz1">
                  <img
                    alt=""
                    src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384"
                    width="160"
                    height="151"
                  />
                </div>
                <div className="text-center">
                  <a
                    href="https://www.meetup.com/find/?source=GROUPS"
                    className="text-viridian"
                  >
                    <h3 className="font-semibold text-xl mb-3">
                      Start learning
                    </h3>
                  </a>
                  <p className="text-sm text-center font-normal text-gray7">
                    At the comfort of your home, you can learn at your own
                    pace...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
