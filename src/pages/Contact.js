import Nav from "../components/Nav";
import contactImage from "../assets/about.jpg";

function Contact() {
  return (
    <div className="w-full h-full">
      <Nav />

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
          &copy; 2023 <span className="text-[#f50057]">iEdu</span>GH. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Contact;
