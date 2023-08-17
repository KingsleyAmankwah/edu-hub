import React from "react";
import AuthorCard from "../components/AuthorCard";
import aboutImg from "../assets/3.jpg";
import Nav from "../components/Nav";

function About() {
  return (
    <div className="w-full h-full">
      <Nav />

      <h2 className="text-left p-6 sm:text-center text-2xl sm:text-3xl font-bold mb-2">
        About <span className="text-[#f50057]">iEdu</span>GH
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[5rem] items-center">
        <div className="w-full h-full">
          <img
            src={aboutImg}
            alt=""
            className="object-cover h-full w-full rounded-lg shadow-md"
          />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-left text-xl sm:text-3xl font-bold mb-2">
            <span className="text-[#f50057]">iEdu</span>GH
          </h2>
          <p className="text-lg text-gray-700">
            iEduGH; COMPUTING EDUCATION GHANA is Hub that provides a source of
            learning experiences for learners and teaching resources. We ensure
            increase the success of students in their learning journey of
            COMPUTING. Our platform offers access to digital textbooks,
            interactive videos, and educational games that can help to engage
            students and make learning more enjoyable. We seek to balance
            between pedagogical flexibility for instructors and dynamic
            experiences for students with individual and diverse leaning needs.
            Our platform has learning effectiveness tools that creates flexible,
            efficient environments that support present INFORMATION
            COMMUNICATION AND TECHNOLOGY education as it’s happening instead of
            asking education to fit the technology.
          </p>
        </div>
      </div>

      <h2 className="text-2xl text-center font-semibold mb-4">Our Authors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8" id="about">
        <AuthorCard
          name="Enoch Frimpong"
          profilePictureSrc={require("../assets/Frimpong.jpg")}
          biography="Encoh Frimpong is an experienced ICT teacher dedicated to enhancing the educational landscape. With a passion for technology and education, Encoh is diligently crafting a web-based learning platform tailored for Junior High School students. Leveraging expertise in both information and communication technology, I aim to create an interactive and engaging virtual environment that empowers students to learn effectively. Through innovative design and a deep understanding of pedagogical methods. I am committed to providing students with a seamless and enriching online learning experience that fosters growth and knowledge acquisition...."
        />
        <AuthorCard
          name="Tandoh Emmanuel Kwesi"
          profilePictureSrc={require("../assets/Tandoh.jpg")}
          biography="Emmanuel Kwesi Tandoh is young leader, public Speaker and Debater, IT Educator. He has interest in youth activism for change and progress, whilst being passionate about using technology and innovation that leads to positive impact. I believe we can make Africa bright and our world a better place with IT and innovation."
        />
        <AuthorCard
          name="Felix Agyapong"
          profilePictureSrc={require("../assets/Felix.jpg")}
          biography="Felix Agyapong is the name, a graphic  and  web(front end)designer with ambition to explore and work as a cyber security expert, also an good in photography and software management"
        />
        <AuthorCard
          name="Prince Nyarko Boahen"
          profilePictureSrc={require("../assets/Bronxy.jpg")}
          biography="A visionary IT professional. Equipped with Programming, Database and Networking. Passionate about merging education and technology, aims to enhance the learning journey of students through an engaging web platform. At Edu hub, we're dedicated to making quality education universally accessible. We envision a future where every junior high is unite with technology and learning, fostering a limitless realm of curiosity and creativity for junior high school students everywhere.This web-based platform serves as a dynamic hub of knowledge, fostering an engaging and interactive environment that empowers students to thrive academically and personally.Join us on this exciting journey of discovery and growth!..."
        />
      </div>

      <footer className="bg-[#333] text-white text-center py-4">
        <p>
          &copy; 2023 <span className="text-[#f50057]">iEdu</span>GH. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default About;
