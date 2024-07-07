import NavItems from "./NavItems";
import reactLogo from "../assets/react.svg";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { X, Menu, LogOutIcon } from "lucide-react";



const Navbar1 = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  
  
  return (
    <div className='sticky z-50 flex items-center justify-between w-full p-4 mx-auto mt-5 border border-gray-500 rounded-full top-3 md:w-3/4 lg:w-3/4 xl:w-11/12'>
      <img src={reactLogo} className="ml-10"></img>
      <ul className="flex gap-5">
        {NavItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      
      <div className="justify-end lg:hidden md:flex-col">
          <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu/>}
          </button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed top-0 right-0 z-20 flex flex-col items-center justify-center w-full p-12 text-white tex bg-neutral-900 lg:hidden">
            <ul>
                {NavItems.map((item) => (
                    <li key={item.id} className="py-4 text-center">
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
            <div className="flex space-x-6">
                <a href="#" className="flex gap-5 px-3 py-2 border rounded-md">
                    <LogOutIcon/>
                    Log Out
                </a>
            </div>
        </div>
      )}
    </div>
  )
}

export default Navbar1