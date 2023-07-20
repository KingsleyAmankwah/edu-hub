import { BiBook, BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

function Eight() {
  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem] mb-[10rem]">
      <header className="flex justify-between items-center">
        <p className="sm:text-3xl lg:text-5xl font-bold">Basic 8</p>
        <Link
          to="/dashboard"
          className="cursor-pointer bg-[#f50057] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
        >
          Go Back
        </Link>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-4">
        <Link
          to=""
          className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md bg-white"
        >
          <h1 className="text-xl font-bold mb-2 text-[#f50057]">Maths</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt quis lorem auctor commodo. Nam fermentum est in ex iaculis
            tincidunt. Integer mattis, elit a scelerisque molestie, odio erat
            laoreet urna.
          </p>

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
        </Link>
        <Link
          to=""
          className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md bg-white"
        >
          <h1 className="text-xl font-bold mb-2 text-[#f50057]">Maths</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt quis lorem auctor commodo. Nam fermentum est in ex iaculis
            tincidunt. Integer mattis, elit a scelerisque molestie, odio erat
            laoreet urna.
          </p>

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
        </Link>
        <Link
          to=""
          className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md bg-white"
        >
          <h1 className="text-xl font-bold mb-2 text-[#f50057]">Maths</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt quis lorem auctor commodo. Nam fermentum est in ex iaculis
            tincidunt. Integer mattis, elit a scelerisque molestie, odio erat
            laoreet urna.
          </p>

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
        </Link>
      </main>
    </div>
  );
}

export default Eight;
