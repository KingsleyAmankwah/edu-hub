import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BiBook, BiTimeFive } from "react-icons/bi";

function Test() {
  const [strandData, setStrandData] = useState([
    {
      strand: "Strand 1: Introduction to Computing",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Components of Computers",
          lessons: [
            {
              title: "Lesson 1: Output Devices",
              description: "Welcome to our lesson on output devices!",
              link: "https://sites.google.com/view/generation-of-computers-group1/home?authuser=0",
            },
            {
              title: "Lesson 2: FULL-SIZED EXTERNAL HARD DISK DRIVE",
              description:
                "Welcome to our lesson on full-sized external hard disk drive!",
              link: "https://myfirststututorials.blogspot.com",
            },
            // Add more lessons for Sub Strand 1 as needed...
          ],
        },
        {
          title: "Sub Strand 2: TECHNOLOGY IN THE COMMUNITY",
          lessons: [
            {
              title: "Lesson 1: TECHNOLOGICAL TOOLS FOR LEARNING",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://computingclassjhs1.blogspot.com/2022/08/technology-tools.html",
            },
            {
              title:
                "Lesson 2: NEGATIVE IMPACT OF COMPUTERS AND COMPUTER USE ON THE ENVIRONMENT.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://sites.google.com/view/ite300bgroup10/home?authuser=0",
            },
            // Add more lessons for Sub Strand 2 as needed...
          ],
        },
        // Add more sub-strands for Strand 1 as needed...
      ],
    },
    {
      strand: "Strand 2: Your Next Strand",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Components of Computers",
          lessons: [
            {
              title: "Lesson 1: Output Devices",
              description: "Welcome to our lesson on output devices!",
              link: "https://sites.google.com/view/generation-of-computers-group1/home?authuser=0",
            },
            {
              title: "Lesson 2: FULL-SIZED EXTERNAL HARD DISK DRIVE",
              description:
                "Welcome to our lesson on full-sized external hard disk drive!",
              link: "https://myfirststututorials.blogspot.com",
            },
            // Add more lessons for Sub Strand 1 as needed...
          ],
        },
        {
          title: "Sub Strand 2: TECHNOLOGY IN THE COMMUNITY",
          lessons: [
            {
              title: "Lesson 1: TECHNOLOGICAL TOOLS FOR LEARNING",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://computingclassjhs1.blogspot.com/2022/08/technology-tools.html",
            },
            {
              title:
                "Lesson 2: NEGATIVE IMPACT OF COMPUTERS AND COMPUTER USE ON THE ENVIRONMENT.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://sites.google.com/view/ite300bgroup10/home?authuser=0",
            },
            // Add more lessons for Sub Strand 2 as needed...
          ],
        },
        // Add more sub-strands for Strand 1 as needed...
      ],
      // Add sub-strands and lessons for Strand 2 as needed...
    },
    {
      strand: "Strand 3: Your Next Strand",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Components of Computers",
          lessons: [
            {
              title: "Lesson 1: Output Devices",
              description: "Welcome to our lesson on output devices!",
              link: "https://sites.google.com/view/generation-of-computers-group1/home?authuser=0",
            },
            {
              title: "Lesson 2: FULL-SIZED EXTERNAL HARD DISK DRIVE",
              description:
                "Welcome to our lesson on full-sized external hard disk drive!",
              link: "https://myfirststututorials.blogspot.com",
            },
            // Add more lessons for Sub Strand 1 as needed...
          ],
        },
        {
          title: "Sub Strand 2: TECHNOLOGY IN THE COMMUNITY",
          lessons: [
            {
              title: "Lesson 1: TECHNOLOGICAL TOOLS FOR LEARNING",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://computingclassjhs1.blogspot.com/2022/08/technology-tools.html",
            },
            {
              title:
                "Lesson 2: NEGATIVE IMPACT OF COMPUTERS AND COMPUTER USE ON THE ENVIRONMENT.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://sites.google.com/view/ite300bgroup10/home?authuser=0",
            },
            // Add more lessons for Sub Strand 2 as needed...
          ],
        },
        // Add more sub-strands for Strand 1 as needed...
      ],
      // Add sub-strands and lessons for Strand 2 as needed...
    },
    {
      strand: "Strand 4: Your Next Strand",
      showSubStrands: false,
      subStrands: [
        {
          title: "Sub Strand 1: Components of Computers",
          lessons: [
            {
              title: "Lesson 1: Output Devices",
              description: "Welcome to our lesson on output devices!",
              link: "https://sites.google.com/view/generation-of-computers-group1/home?authuser=0",
            },
            {
              title: "Lesson 2: FULL-SIZED EXTERNAL HARD DISK DRIVE",
              description:
                "Welcome to our lesson on full-sized external hard disk drive!",
              link: "https://myfirststututorials.blogspot.com",
            },
            // Add more lessons for Sub Strand 1 as needed...
          ],
        },
        {
          title: "Sub Strand 2: TECHNOLOGY IN THE COMMUNITY",
          lessons: [
            {
              title: "Lesson 1: TECHNOLOGICAL TOOLS FOR LEARNING",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://computingclassjhs1.blogspot.com/2022/08/technology-tools.html",
            },
            {
              title:
                "Lesson 2: NEGATIVE IMPACT OF COMPUTERS AND COMPUTER USE ON THE ENVIRONMENT.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              link: "https://sites.google.com/view/ite300bgroup10/home?authuser=0",
            },
            // Add more lessons for Sub Strand 2 as needed...
          ],
        },
        // Add more sub-strands for Strand 1 as needed...
      ],
      // Add sub-strands and lessons for Strand 2 as needed...
    },
    // Add more strands as needed...
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
        <p className="sm:text-3xl lg:text-5xl font-bold">Basic 8</p>
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

            <footer className="flex items-center mt-4">
              <div className="flex items-center gap-2">
                <BiTimeFive className="h-6 w-6 text-[#f50057]" />
                <p className="text-gray-600">Duration: 30mins</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <BiBook className="h-6 w-6 text-[#f50057]" />
                <p className="text-gray-600">Topics: 20</p>
              </div>
            </footer>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Test;
