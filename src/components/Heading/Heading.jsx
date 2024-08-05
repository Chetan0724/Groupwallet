import { Link } from "react-router-dom";

function Heading() {
  return (
      <div
        className="flex flex-col items-center bg-[#201E43] gap-7 text-white"
        id="header"
      >
        <div>
          <Link to="/">
            <h1 className="text-4xl font-sans font-medium pt-5"><span className="font-bold">G</span>roupwallet</h1>
          </Link>
        </div>
        <div className="pb-5">
          <nav className="bg-white py-2 px-10 rounded-full shadow-lg">
            <ul className="flex gap-10 text-lg">
              <li className="hover:bg-[#201E43] hover:text-white text-black pl-1 pr-1 rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-[#201E43] hover:text-white text-black pl-1 pr-1 rounded-md">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="hover:bg-[#201E43] hover:text-white text-black pl-1 pr-1 rounded-md">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}

export default Heading;
