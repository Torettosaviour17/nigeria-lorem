import logo from "../../../public/assets/logo.png";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between px-5 lg:px-20 md:p-3 items-center">
      {/* Logo Section */}
      <div>
        <img
          className="scale-50 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-auto"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Links for Desktop */}
      <div>
        <ul className="gap-7 hidden md:flex">
          <li className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]">
            Home
          </li>
          <li className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]">
            Who are we
          </li>
          <li>
            <select
              name=""
              id=""
              className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
            >
              <option value="">Subject</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile
      <button
        id="menu-btn"
        className="block md:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        <div className=" w-6 h-6 flex flex-col items-center justify-center">
          <span
            className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[3px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "mt-[3px]"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[3px]" : "mt-[3px]"
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 bg-white flex-col md:hidden items-center justify-center space-y-6 font-bold z-40`}
      >
        <Link
          to="/"
          className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
        >
          Home
        </Link>

        <Link
          to="/AboutUs"
          className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
        >
          Who we are
        </Link>
        <li className="list-none">
          <select
            name=""
            id=""
            className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
          >
            <option value="">Subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="geography">Geography</option>
            <option value="literature">Literature</option>
            <option value="art">Art</option>
            <option value="technology">Technology</option>
          </select>
        </li>
      </div> */}
    </nav>
  );
}
