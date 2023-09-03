import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { BiBook, BiTimeFive } from "react-icons/bi";
import backgroundImg from "../assets/4.jpg";

function Seven() {
  const [strandData, setStrandData] = useState([
    {
      strand: "Strand 1: Introduction to Computing",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Components of Computers",
          lessons: [
            {
              title: "Lesson 1: Perceptual Computing",
              description:
                "Explore the world of output devices in computing. Learn how perceptual computing enhances user experiences",
              link: "https://group95iteh.edublogs.org/2022/09/09/perceptual-computing/",
            },
            {
              title: "Lesson 2: Output Devices",
              description:
                "Delve into the realm of output devices and their significance in computing systems.",
              link: "https://group96wearabledevices.blogspot.com/2022/08/wearable-displays.html",
            },
            {
              title: "Lesson 3: Personalizing Computer Desktop",
              description:
                "Customize your computer desktop and discover the benefits of using full-sized external devices",
              link: "https://sites.google.com/view/ite3hgroup98/home",
            },
            // Add more lessons for Sub Strand 1 as needed...
          ],
        },
        {
          title: "Sub Strand 2: TECHNOLOGY IN THE COMMUNITY",
          lessons: [
            {
              title: "Lesson 1: Proposed Solutions To Problems",
              description:
                "Investigate technological solutions to community problems and their potential impact",
              link: "https://aitegroup1012.blogspot.com/2022/10/technological-solutions-to-problems-in.html",
            },
            {
              title: "Lesson 2: Solving Problems Using Technology.",
              description:
                "Explore how technology can be employed to address challenges within communities",
              link: "https://erichjoey.blogspot.com/2022/09/problems-in-community-that-can-be.html",
            },
          ],
        },
        {
          title: "Sub Strand 3: Health & Safety",
          lessons: [
            {
              title: "Lesson 1: Health & In The Use of ICT Tools",
              description:
                "Learn about health considerations while using ICT tools and how to maintain well-being at the computer workstation",
              link: "https://oakmaurice1.edublogs.org/2022/09/23/health-issues-at-the-computer-workstation/",
            },
            {
              title: "Lesson 2: Risk Reduction at Workstation",
              description:
                "Discover strategies to reduce risks and promote safety in a computer workstation environment",
              link: "https://group104ite300h.edublogs.org/",
            },
          ],
        },
      ],
    },
    {
      strand: "Strand 2: Productivity Software",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Introduction To Word Processing",
          lessons: [
            {
              title: "Lesson 1: How To Use Microsoft Word",
              description:
                "Learn the essentials of using Microsoft Word for efficient document creation and formatting",
              link: "https://sites.google.com/view/ite300hgroup105/home   ",
            },
            {
              title: "Lesson 2: Use of SmartArt",
              description:
                "Uncover the capabilities of SmartArt in enhancing document visuals and layout",
              link: "https://sites.google.com/view/group-106-300-h/lessons/podcast",
            },
            {
              title: "Lesson 3: How To Add Multimedia",
              description:
                "Incorporate multimedia elements into your documents to make them engaging and informative",
              link: "https://sites.google.com/view/group-107-ite300j/home",
            },
          ],
        },
        {
          title: "Sub Strand 2: Introduction To Presentation",
          lessons: [
            {
              title: "Lesson 1: How To Add Pictures & Screenshots",
              description:
                "Master the art of adding images and screenshots to presentations for impactful visual communication",
              link: "https://sites.google.com/view/assiggroup109",
            },
            {
              title: "Lesson 2: Slides Animation In Powerpoint",
              description:
                "Explore slide animations in PowerPoint to create dynamic and captivating presentations",
              link: "https://sites.google.com/view/ite300bgroup10/home?authuser=0",
            },
            {
              title: "Lesson 3: Adding charts In Powerpoint",
              description:
                "Learn how to incorporate charts and graphs to present data effectively in PowerPoint",
              link: "https://sites.google.com/view/group-110",
            },
          ],
        },
        {
          title: "Sub Strand 3: Introduction To Publishing",
          lessons: [
            {
              title: "Lesson 1: Create & Present Desktop Published Document",
              description:
                "Dive into the world of desktop publishing and create visually appealing documents for various purposes",
              link: "https://brightdk.edublogs.org/introduction-to-desktop-publishing/",
            },
            {
              title: "Lesson 2: Desktop Published Document",
              description:
                "Explore the intricacies of desktop publishing and its applications in document creation",
              link: "https://sites.google.com/view/group-112/home?authuser=0",
            },
          ],
        },
        {
          title: "Sub Strand 4: Introduction To Spreadsheet",
          lessons: [
            {
              title: "Lesson 1: How To Use Spreadsheet",
              description:
                "Discover the versatility of spreadsheets and how they can be used for data management and analysis",
              link: "https://sites.google.com/view/how-to-use-spreadsheet/home",
            },
            {
              title: "Lesson 2: Desktop Published Document",
              description:
                " Continue your journey into desktop publishing, exploring more advanced techniques",
              link: "https://sites.google.com/view/group115/home",
            },
            {
              title: "Lesson 3: The Use of Data & Pivot Tables",
              description:
                " Learn about data manipulation and analysis using spreadsheets, including pivot tables.",
              link: "https://sites.google.com/view/introduction-to-spreadsheet/",
            },
          ],
        },
      ],
    },
    {
      strand: "Strand 3: Communication Networks",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Computer Networks",
          lessons: [
            {
              title: "Lesson 1: E-commerce",
              description:
                " Delve into the realm of e-commerce and its role in modern business transactions",
              link: "https://sites.google.com/view/lessonone-commerceandcashless/home",
            },
            {
              title: "Lesson 2: E-learning Potentials",
              description:
                " Explore the potential of e-learning and its benefits in education and skill development",
              link: "https://sites.google.com/view/elearning-potentials/home?authuser=0",
            },
          ],
        },
        {
          title: "Sub Strand 2: Internet and Social Media",
          lessons: [
            {
              title: "Lesson 1: Concepts of Social Media",
              description:
                "Gain insight into the concepts and impact of social media on communication and society",
              link: "https://sites.google.com/view/intro-to-social-media/concept-of-social-media",
            },
          ],
        },
        {
          title: "Sub Strand 3: Information Security",
          lessons: [
            {
              title: "Lesson 1: Cyberbullying & Digital Footprints",
              description:
                "Examine the importance of information security and the implications of cyberbullying and digital footprints",
              link: "https://sites.google.com/view/group121itej/lessons/ten10-information-hacking-techniques-and-their-explanations",
            },
            {
              title: "Lesson 2: Information Hacking",
              description:
                "Explore information hacking techniques and strategies to safeguard digital information",
              link: "https://sites.google.com/view/group121itej/lessons/ten10-information-hacking-techniques-and-their-explanations",
            },
          ],
        },
        {
          title: "Sub Strand 4: Web Technologies",
          lessons: [
            {
              title: "Lesson 1: Creating Blogs",
              description:
                "Learn the fundamentals of creating blogs and their significance in online communication",
              link: "https://sites.google.com/view/group-122-blogging/home",
            },
            {
              title: "Lesson 2: Web Browsers",
              description:
                "Discover web browsers and their role in accessing and navigating the online world",
              link: "https://socialblog101.edublogs.org/",
            },
          ],
        },
      ],
    },
    {
      strand: "Strand 4: Computational Thinking",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Introduction to Programming",
          lessons: [
            {
              title: "Lesson 1: Concepts of Programming",
              description:
                "Explore foundational concepts of programming and their relevance in software development",
              link: "https://ite3cgroup126.edublogs.org/2022/08/24/integrated-development-environment-ide/ ",
            },
            {
              title: "Lesson 2: Integrated Development Environment",
              description:
                "Familiarize yourself with integrated development environments and their role in efficient coding",
              link: "https://ite3cgroup126.edublogs.org/2022/08/24/integrated-development-environment-ide/ ",
            },
          ],
        },
        {
          title: "Sub Strand 2: Algorithm",
          lessons: [
            {
              title: "Lesson 1: Flowchart & Pseudocode",
              description:
                "Learn how to represent algorithms using flowcharts and pseudocode for effective problem-solving",
              link: "https://andrewsnyaaba.edublogs.org/",
            },
            {
              title: "Lesson 2: Flowchart Algorithm to Pseudocode",
              description:
                "Dive deeper into algorithmic thinking and its application in converting flowcharts to pseudocode",
              link: "https://group128dradasa.blogspot.com/2022/09/computational-thinking.html",
            },
          ],
        },
        {
          title: "Sub Strand 3: Robotics",
          lessons: [
            {
              title: "Lesson 1: Robots Concept",
              description:
                "Discover the world of robotics and gain insights into the concept and applications of robots",
              link: "bignature82.edublogs.org",
            },
          ],
        },
        {
          title: "Sub Strand 4: Artificial Intelligence",
          lessons: [
            {
              title: "Lesson 1: Knowledge Based Systems",
              description:
                "Explore knowledge-based systems and their role in artificial intelligence and decision-making",
              link: "https://flexai.blogspot.com/ ",
            },
          ],
        },
      ],
    },
  ]);

  // Define a function to toggle the visibility of sub-strands for a specific strand
  const toggleStrand = (strandIndex) => {
    const updatedStrands = [...strandData];
    updatedStrands[strandIndex].showSubStrands =
      !updatedStrands[strandIndex].showSubStrands;
    setStrandData(updatedStrands);
  };

  const toggleSubStrand = (strandIndex, subStrandIndex) => {
    const updatedStrands = [...strandData];
    const subStrands = updatedStrands[strandIndex].subStrands;

    // Close previously open sub-strands
    subStrands.forEach((subStrand, index) => {
      if (index !== subStrandIndex) {
        subStrand.showSubStrands = false;
      }
    });

    // Toggle the visibility of the selected sub-strand
    subStrands[subStrandIndex].showSubStrands =
      !subStrands[subStrandIndex].showSubStrands;

    setStrandData(updatedStrands);
  };

  return (
    <div
      className="font-[system-ui] p-[1rem] sm:p-[2rem] mb-[10rem] w-full h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50 z-10"
        style={{ pointerEvents: "none" }}
      ></div>
      <header className="flex justify-between items-center relative z-20">
        <p className="sm:text-3xl lg:text-5xl font-bold text-white">Basic 7</p>
        <Link
          to="/classes"
          className="cursor-pointer bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
        >
          Go Back
        </Link>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] mt-4">
        {strandData.map((strand, strandIndex) => (
          <div
            key={strandIndex}
            className="flex flex-col p-4 rounded-lg shadow-lg"
            style={{
              backgroundColor: strand.showSubStrands ? "#fff" : "initial",
            }}
          >
            <h1
              className="text-xl font-bold mb-2 text-[#f50057] cursor-pointer"
              onClick={() => toggleStrand(strandIndex)}
            >
              {strand.strand}
            </h1>

            {strand.showSubStrands && (
              <>
                {strand.subStrands.map((subStrand, subStrandIndex) => (
                  <div key={subStrandIndex}>
                    <h3
                      className="text-xl font-bold mb-2 text-[#f50057] cursor-pointer"
                      onClick={() =>
                        toggleSubStrand(strandIndex, subStrandIndex)
                      }
                    >
                      {subStrand.title}
                    </h3>

                    {subStrand.showSubStrands && (
                      <>
                        {subStrand.lessons.map((lesson, lessonIndex) => (
                          <React.Fragment key={lessonIndex}>
                            <h4 className="font-bold">{lesson.title}</h4>
                            <p>{lesson.description}</p>
                            <Link
                              target="_blank"
                              to={lesson.link}
                              className="cursor-pointer text-center bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
                            >
                              Start Lesson
                            </Link>
                          </React.Fragment>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Seven;
