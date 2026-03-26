import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";  // Assuming your assets include a close icon
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const {token, setToken} = useContext(AppContext)
  
  let [showMenu, setShowMenu] = useState(false);  // State for mobile menu toggle

  const toggleMenu = () => setShowMenu(!showMenu);  // Toggle function for mobile menu

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }



  return (
    <div className="relative">
      <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400">
        <img onClick={() => navigate('./')} className="md:w-40 cursor-pointer w-24" src={assets.logo} alt="Logo" />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 items-start font-medium">
          <NavLink to={"/"} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m -auto hidden" />
          </NavLink>
          <NavLink to={"/doctors"} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m -auto hidden" />
          </NavLink>
          <NavLink to={"/about"} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m -auto hidden" />
          </NavLink>
          <NavLink to={"./contact"} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m -auto hidden" />
          </NavLink>
        </ul>

        {/* Profile and Hamburger/Cross Menu */}
        <div className="flex items-center gap-4 cursor-pointer group relative">
          {token ? (
            <div className="flex gap-2 items-center cursor-pointer group relative">
              {/* <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" /> */}
              <p className="font-semibold text-sm">My Profile</p>
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-6">
                  <p onClick={() => navigate('./my-appointments')} className="hover:text-black transition-colors duration-300">My Appointments</p>
                  <p onClick={logout} className="hover:text-black transition-colors duration-300">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("./login")}
              className="bg-primary py-3 px-8 text-white rounded-full font-medium hidden md:block hover:bg-primary-dark transition-colors duration-300"
            >
              Create Account
            </button>
          )}

          {/* Hamburger/Cross Icon Toggle */}
          <img
            onClick={toggleMenu}
            className="w-6 md:hidden"
            src={showMenu ? assets.cross_icon : assets.menu_icon}  // Toggle between menu and close icons
            alt={showMenu ? "Close Menu" : "Menu"}
          />
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`absolute top-16 left-0 w-full  bg-white shadow-lg md:hidden z-30 transform transition-transform duration-500 ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col items-center justify-center gap-6 p-6">
          <NavLink to={"/"} onClick={toggleMenu} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">HOME</li>
          </NavLink>
          <NavLink to={"/doctors"} onClick={toggleMenu} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">ALL DOCTORS</li>
          </NavLink>
          <NavLink to={"/about"} onClick={toggleMenu} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">ABOUT</li>
          </NavLink>
          <NavLink to={"/contact"} onClick={toggleMenu} className="hover:text-primary transition-colors duration-300">
            <li className="py-1">CONTACT</li>
          </NavLink>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
