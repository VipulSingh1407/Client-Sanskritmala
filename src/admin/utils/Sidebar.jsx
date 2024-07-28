import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt, FaStickyNote } from "react-icons/fa"; // Added FaStickyNote for notes icon
import { UserData } from "../../context/userContext";

const Sidebar = () => {
  const { user } = UserData();
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col shadow-lg py-20">
      <div className="p-4 text-2xl font-semibold text-center border-b border-gray-700">
        Dashboard
      </div>
      <ul className="flex-1 mt-4">
        <li className="hover:bg-gray-700 transition-colors duration-300">
          <Link to={"/admin/dashboard"} className="flex items-center p-4 hover:text-indigo-400">
            <div className="text-xl mr-3">
              <AiFillHome />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li className="hover:bg-gray-700 transition-colors duration-300">
          <Link to={"/admin/course"} className="flex items-center p-4 hover:text-indigo-400">
            <div className="text-xl mr-3">
              <FaBook />
            </div>
            <span>Courses</span>
          </Link>
        </li>

        <li className="hover:bg-gray-700 transition-colors duration-300">
          <Link to={"/admin/book"} className="flex items-center p-4 hover:text-indigo-400">
            <div className="text-xl mr-3">
              <FaBook />
            </div>
            <span>Books</span>
          </Link>
        </li>

        <li className="hover:bg-gray-700 transition-colors duration-300">
          <Link to={"/admin/ebooks"} className="flex items-center p-4 hover:text-indigo-400">
            <div className="text-xl mr-3">
              <FaBook />
            </div>
            <span>eBooks</span>
          </Link>
        </li>

        <li className="hover:bg-gray-700 transition-colors duration-300">
          <Link to={"/admin/notes"} className="flex items-center p-4 hover:text-indigo-400">
            <div className="text-xl mr-3">
              <FaStickyNote />
            </div>
            <span>Notes</span>
          </Link>
        </li>

        {user && user.mainrole === "superadmin" && (
          <li className="hover:bg-gray-700 transition-colors duration-300">
            <Link to={"/admin/users"} className="flex items-center p-4 hover:text-indigo-400">
              <div className="text-xl mr-3">
                <FaUserAlt />
              </div>
              <span>Users</span>
            </Link>
          </li>
        )}

        <li className="hover:bg-gray-700 transition-colors duration-300">
          <Link to={"/account"} className="flex items-center p-4 hover:text-indigo-400">
            <div className="text-xl mr-3">
              <AiOutlineLogout />
            </div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
