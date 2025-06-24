import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const { user,setShowlogin,logout,credit} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo2} alt="" className="w-29 sm:w-30 lg:w-40 rounded-full mt-6" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/Buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 sm:px-6 sm:py-3  rounded-full hover:scale-105 transition-all duration-700"
            >
              <img
                src={assets.credit_star}
                alt=""
                className="w-5 h-10 cursor-pointer"
              />
              <p className="text-xs sm:text-sm font-medium">
                Credits Left : {credit}
              </p>
            </button>
            <p  className="text-gray-600 max-sm:hidden pl-4">Hii!! {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden top-0 right-0 z-10 text-black rounded pt-12 hidden group-hover:block">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li onClick={logout} className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/Buy")} className="cursor-pointer">
              Pricing
            </p>

            <button onClick={()=>setShowlogin(true)} className="bg-zinc-800 text-white px-7 py-2 sm:px-2 text-sm rounded-full cursor-pointer">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
