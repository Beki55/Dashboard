import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div>
      {/* Sidebar */}
      <nav
        className={`w-full md:w-64 h-screen p-8 fixed left-0 top-0 z-10 ${
          isOpen ? "block" : "hidden md:block"
        } bg-slate-950 text-white`} // Fixed sidebar with background and text color
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">EzyMetrics</h1>
          <button
            className="text-xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ✕
          </button>
        </div>
        <ul className="space-y-6 mt-8">
          {" "}
          {/* Increased spacing between links */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              <FaTachometerAlt className="mr-2 text-blue-400" />{" "}
              {/* Blue icon */}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              <FaUserFriends className="mr-2 text-green-400" />{" "}
              {/* Green icon */}
              Leads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              <FaChartBar className="mr-2 text-yellow-400" />{" "}
              {/* Yellow icon */}
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              <FaFileAlt className="mr-2 text-red-400" /> {/* Red icon */}
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
