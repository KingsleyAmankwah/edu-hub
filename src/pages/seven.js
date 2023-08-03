import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { BiBook, BiTimeFive } from "react-icons/bi";

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
              description: "Welcome to our lesson on output devices!",
              link: "https://group95iteh.edublogs.org/2022/09/09/perceptual-computing/",
            },
            {
              title: "Lesson 2: Output Devices",
              description: "Welcome to our lesson on output devices!",
              link: "https://group96wearabledevices.blogspot.com/2022/08/wearable-displays.html",
            },
            {
              title: "Lesson 3: Personalizing Computer Desktop",
              description: "Welcome to our lesson on full-sized external",
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
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://aitegroup1012.blogspot.com/2022/10/technological-solutions-to-problems-in.html",
            },
            {
              title: "Lesson 2: Solving Problems Using Technology.",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://erichjoey.blogspot.com/2022/09/problems-in-community-that-can-be.html",
            },
          ],
        },
        {
          title: "Sub Strand 3: Health & Safety",
          lessons: [
            {
              title: "Lesson 1: Health & In The Use of ICT Tools",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://oakmaurice1.edublogs.org/2022/09/23/health-issues-at-the-computer-workstation/",
            },
            {
              title: "Lesson 2: Risk Reduction at Workstation",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
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
              description: "Lorem",
              link: "https://sites.google.com/view/ite300hgroup105/home   ",
            },
            {
              title: "Lesson 2: Use of SmartArt",
              description:
                "Welcome to our lesson on full-sized external hard disk drive!",
              link: "https://sites.google.com/view/group-106-300-h/lessons/podcast",
            },
            {
              title: "Lesson 3: How To Add Multimedia",
              description:
                "Welcome to our lesson on full-sized external hard disk drive!",
              link: "https://sites.google.com/view/group-107-ite300j/home",
            },
          ],
        },
        {
          title: "Sub Strand 2: Introduction To Presentation",
          lessons: [
            {
              title: "Lesson 1: How To Add Pictures & Screenshots",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/assiggroup109",
            },
            {
              title: "Lesson 2: Slides Animation In Powerpoint",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/ite300bgroup10/home?authuser=0",
            },
            {
              title: "Lesson 3: Adding charts In Powerpoint",
              description: "Lorem ipsum dolor sit amet consectetur ad",
              link: "https://sites.google.com/view/group-110",
            },
          ],
        },
        {
          title: "Sub Strand 3: Introduction To Publishing",
          lessons: [
            {
              title: "Lesson 1: Create & Present Desktop Published Document",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://brightdk.edublogs.org/introduction-to-desktop-publishing/",
            },
            {
              title: "Lesson 2: Desktop Published Document",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/group-112/home?authuser=0",
            },
          ],
        },
        {
          title: "Sub Strand 4: Introduction To Spreadsheet",
          lessons: [
            {
              title: "Lesson 1: How To Use Spreadsheet",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/how-to-use-spreadsheet/home",
            },
            {
              title: "Lesson 2: Desktop Published Document",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/group115/home",
            },
            {
              title: "Lesson 3: The Use of Data & Pivot Tables",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
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
              description: "Lorem",
              link: "https://sites.google.com/view/lessonone-commerceandcashless/home",
            },
            {
              title: "Lesson 2: E-learning Potentials",
              description: "lorem",
              link: "https://sites.google.com/view/elearning-potentials/home?authuser=0",
            },
          ],
        },
        {
          title: "Sub Strand 2: Internet and Social Media",
          lessons: [
            {
              title: "Lesson 1: Concepts of Social Media",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/intro-to-social-media/concept-of-social-media",
            },
          ],
        },
        {
          title: "Sub Strand 3: Information Security",
          lessons: [
            {
              title: "Lesson 1: Cyberbulling & Digital Footprints",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/group121itej/lessons/ten10-information-hacking-techniques-and-their-explanations",
            },
            {
              title: "Lesson 2: Information Hacking",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/group121itej/lessons/ten10-information-hacking-techniques-and-their-explanations",
            },
          ],
        },
        {
          title: "Sub Strand 4: Web Technologies",
          lessons: [
            {
              title: "Lesson 1: Creating Blogs",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://sites.google.com/view/group-122-blogging/home",
            },
            {
              title: "Lesson 2: Web Browsers",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
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
              description: "Lorem",
              link: "https://ite3cgroup126.edublogs.org/2022/08/24/integrated-development-environment-ide/ ",
            },
            {
              title: "Lesson 2: Integrated Development Environment",
              description: "Lorem",
              link: "https://ite3cgroup126.edublogs.org/2022/08/24/integrated-development-environment-ide/ ",
            },
          ],
        },
        {
          title: "Sub Strand 2: Algorithm",
          lessons: [
            {
              title: "Lesson 1: Flowchart & Pseudocode",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://andrewsnyaaba.edublogs.org/",
            },
            {
              title: "Lesson 2: Flowchart Algorithm to Pseudocode",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
              link: "https://group128dradasa.blogspot.com/2022/09/computational-thinking.html",
            },
          ],
        },
        {
          title: "Sub Strand 3: Robotics",
          lessons: [
            {
              title: "Lesson 1: Robots Concept",
              description: "Lorem ipsum dolor sit amet consectetur adipisicin",
              link: "bignature82.edublogs.org",
            },
          ],
        },
        {
          title: "Sub Strand 4: Artificial Intelligence",
          lessons: [
            {
              title: "Lesson 1: Knowledge Based Systems",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing",
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

  // Define a function to toggle the visibility of sub-strands for a specific sub-strand
  const toggleSubStrand = (strandIndex, subStrandIndex) => {
    const updatedStrands = [...strandData];
    updatedStrands[strandIndex].subStrands[subStrandIndex].showSubStrands =
      !updatedStrands[strandIndex].subStrands[subStrandIndex].showSubStrands;
    setStrandData(updatedStrands);
  };

  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem] mb-[10rem]">
      <header className="flex justify-between items-center">
        <p className="sm:text-3xl lg:text-5xl font-bold">Basic 7</p>
        <Link
          to="/"
          className="cursor-pointer bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
        >
          Go Back
        </Link>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] mt-4">
        {strandData.map((strand, strandIndex) => (
          <div
            key={strandIndex}
            className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md bg-white"
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

            {/* <footer className="flex items-center mt-4">
              <div className="flex items-center gap-2">
                <BiTimeFive className="h-6 w-6 text-[#f50057]" />
                <p className="text-gray-600">Duration: 30mins</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <BiBook className="h-6 w-6 text-[#f50057]" />
                <p className="text-gray-600">Lesson: 20</p>
              </div>
            </footer> */}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Seven;
