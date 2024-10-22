import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile sidebar

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Main content */}
      <div className="flex-1 p-6 ml-0 md:ml-64"> {/* Adjust margin left for desktop */}
        <div className="flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold">EzyMetrics</h1> */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <main className="mt-4">
          <Outlet /> {/* Render the routed content here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
