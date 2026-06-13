import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-100">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img
          className="cursor-pointer w-11.25 hover:scale-105 transition-transform duration-200"
          src="https://tse1.mm.bing.net/th/id/OIP.25cVkL0dcd4Oi4_7YNRl0AHaHU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Logo"
        />
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex items-center space-x-8 font-medium text-gray-600">
        <Link
          to="/"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/movie"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          MovieList
        </Link>
        <Link
          to="/watchlist"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          YourWatchList
        </Link>
        <Link
          to="/top"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Top
        </Link>
      </div>
    </nav>
  );
}

export default Header;
