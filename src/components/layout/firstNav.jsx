import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa"; // Importing FontAwesome icons

export default function FirstNav() {
  return (
    <div className="bg-[#FFB313] p-2 flex justify-between md:px-24 items-center">
      {/* Left Section: Button */}
      <button className="border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#FFB313] transition">
        Become a contributor
      </button>

      {/* Right Section: Social Media Icons */}
      <div className="flex space-x-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}
