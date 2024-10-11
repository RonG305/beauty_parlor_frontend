import React from "react";

import "../../globals.css";
import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const Navbar: React.FC<DashboardHeaderProps> = ({ toggleSidebar }) => {
 

  return (
    <div className=" h-[52px] bg-white flex items-center fixed top-0 w-full z-30 justify-between px-3 py-2 ">
      <div className=" flex items-center gap-3">
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-1 text-gray-700 focus:outline-none"
          >
            <MdMenu size={24} />
          </button>
        </div>
      </div>

     
        <div className=" rounded-lg px-3 py-2 outline-blue-500 border flex items-center gap-4  ">
          <IoMdSearch size={20} color="black" />
          <input
           className="outline-none"
            placeholder="Search beauty product or service ..."
            type="search"
          />
        </div>
     
    </div>
  );
};

export default Navbar;
