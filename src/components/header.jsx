import React, { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

const Header = () => {

  const pathname = useParams();
  const pathname2 = useLocation();

  console.log(" the pathname from params => ", pathname);
  console.log(" the pathname from params again => ", pathname2.pathname);

  return (
    <div className="flex items-center space-x-2 justify-between p-3">
      <div>Logo</div>
      <div>
        {/* desktop view */}
        <nav className="lg:flex items-center space-x-3 hidden">
          {NavigationArray?.map((navigation) => (
            <Link
              target="_blank"
              key={navigation.id}
              to={`${navigation.link}`}
              className={`${pathname2?.pathname === navigation?.link ? "text-red-600" : ""
                }`}
            >
              {navigation.label}
            </Link>
          ))}
        </nav>

        {/* mobile view */}
        <nav className="lg:hidden">
          <MdMenu className="text-red-600 w-10 h-10 cursor-pointer" onClick={() => setOpenHeader(current => !current)} />
          {openHeader && (
            <div className="absolute w-full inset-0 bg-black/70 z-50">
              <div className="bg-white">mobile modal open</div>
              <h4>
                mobile header
              </h4>
              <div>

              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;



{/* {NavigationArray?.map((navigation) => (
            <NavLink
              key={navigation.label}
              to={`${navigation.link}`}
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              {navigation.label}
            </NavLink>
          ))} */}

{/* see the difference  */ }
{/* <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            About
          </NavLink> */}
{/* <Link to="/about">About</Link> */ }
{/* <Link to="/blog">Blog</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link> */}

