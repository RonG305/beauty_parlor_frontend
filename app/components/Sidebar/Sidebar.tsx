import React from 'react'
import routes from '../routes/routes'
import Link from 'next/link'
import { MdClose } from 'react-icons/md';

interface SidebarProps {
    toggleSidebar: () => void;
    isOpen: boolean;
  }
  

const Sidebar:React.FC<SidebarProps> = ({toggleSidebar,isOpen}) => {
  return (
    <div 
    
    className={`fixed inset-y-0 left-0 z-50 md:w-64 w-1/2   transition-transform transform   overflow-y-hidden rounded-lg bg-white shadow-lg m-2  md:relative md:translate-x-0 md:block p-4 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
        <div className=' md:hidden flex items-center justify-end'>
        <MdClose onClick={toggleSidebar} size={25} />
        </div>
       
      <div className=' flex flex-col gap-2'>
        {routes.map((route, index) => (
            <Link href={`${route.path}`} className=' capitalize font-medium flex gap-2  rounded-md p-2 '>{route.icon}{route.id}</Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
