import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LuHome, LuSearch, LuClapperboard, LuTicket } from 'react-icons/lu';
import mascot from './../assets/images/Mascot.png';


function Header() {
    const menu = [
      {
        id: 1,
        name: "HOME",
        icon: LuHome,
        href: "/home",
      },
      {
        id: 2,
        name: "SEARCH",
        icon: LuSearch,
        href: "#search",
      },
      {
        id: 3,
        name: "MOVIES",
        icon: LuClapperboard,
        href: "#movies",
      },
      {
        id: 4,
        name: "BUY NOW",
        icon: LuTicket,
        href: "#buynow",
      },
    ];

    const HeaderItem = ({ name, Icon, href }) => (
      <a
        href={href}
        className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8"
      >
        <Icon />
        <h2 className="hidden md:block">{name}</h2>
      </a>
    );


  return (
    <div>
      <header className="sticky bg-indigo-950 top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4 flex items-center gap-8">
              <img
                src={mascot}
                alt="Mascot"
                className="w-[80px] md:w-[115px] object-cover transition-all duration-300"
              />
              <nav className="hidden md:flex gap-8 transition-all duration-300">
                {menu.map((item) => (
                  <HeaderItem
                    key={item.id}
                    name={item.name}
                    Icon={item.icon}
                    href={item.href}
                  />
                ))}
              </nav>

              <nav className="flex md:hidden gap-6 hover:font-bold cursor-pointer transition-all duration-300">
                {menu.map((item) => (
                  <HeaderItem
                    key={item.id}
                    name={item.name}
                    Icon={item.icon}
                    href={item.href}
                  />
                ))}
              </nav>
            </div>
            <NavLink
              to="/login"
              className="bg-purple-900 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm sm:text-base md:text-base absolute right-4 transition-all duration-300 ease-in-out"
            >
              Log in
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header