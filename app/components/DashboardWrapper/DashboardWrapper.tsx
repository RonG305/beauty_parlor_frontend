'use client'

import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';




const DashboardWrapper:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dashboard-container text-sm overflow-x-hidden">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      </div>
    );
  };
  
  export default DashboardWrapper;
