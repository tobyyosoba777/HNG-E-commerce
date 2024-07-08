  import NavItems from "./NavItems";
  import LightLogo from "../assets/Logo.png"
  import DarkLogo from '../assets/LogoDark.png'
  import { useState } from "react";
  import { NavLink, BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import { X, Menu, LogOutIcon } from "lucide-react";
  

  const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

      const toggleNavbar = () => {
          setMobileDrawerOpen(!mobileDrawerOpen)
      }
    
    
    return (
      <Router>
      <nav
        className="sticky z-50 flex items-center justify-between px-10 mx-auto mt-2 text-gray-700 bg-white w-10-full md:border md:border-gray-400 md:rounded-full top-2 max-w-md:rounded-none max-w-md:border-none sm:w-4/5 md:w-4/5 lg:w-3/4 xl:w-11/12"
      >
      <img
          alt="Logo-icon"
          src={LightLogo}
          className="ml-2"
          width={80}
          height={80}
        />
        
        <ul className="items-center justify-center hidden mr-5 space-x-12 lg:flex">
          {NavItems.map((item) => (
            <li key={item.id}>
              <NavLink to={item.link}
              className={({isActive}) => 
              isActive ? 'font-bold' : 'text-gray-700'}>
              <div className="flex items-center justify-center gap-3">
                {item.icon}
                {item.text}
              </div>
                
              </NavLink>
              
            </li>
          ))}
        </ul>
        
          <div className="justify-end lg:hidden md:flex-col">
              <button onClick={toggleNavbar} className="relative z-50">
                  {mobileDrawerOpen ? <X size={30} className="z-50 text-gray-950"/> : <Menu className="text-black" size={30}/>}
              </button>
          </div>

          
        
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-20 flex flex-col items-center justify-center w-1/2 h-full bg-neutral-200 text-gray-950 lg:hidden">
              <ul>
                  {NavItems.map((item) => (
                      <li key={item.id} className="py-1 pb-12 text-center">
                      {/* <a href={item.href}>{item.text}</a> */}
                          <div className="flex items-center justify-center gap-3">
                            {item.icon}
                            <a href={item.href}>{item.text}</a>
                          </div>
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
      </nav>
      </Router>
    )
  }

  export default Navbar;