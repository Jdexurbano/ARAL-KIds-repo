/** @format */

import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
function NavBar() {
  const pages = [
    { id: 1, address: "#Home", name: "Home" },
    { id: 2, address: "#About", name: "About" },
    { id: 3, address: "#Feature", name: "Feature" },
    { id: 4, address: "#Contact", name: "Contact" },
  ];
  const [open, setOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
    innerWidth >= 900 && setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header className="z-10 bg-primary px-[20px] desktop:flex desktop:items-center desktop:px-[50px] large:px-[130px]">
        <div className="flex items-center justify-between cursor-pointer w-full">
          <img
            src="/images/Website_Logo.png"
            alt="ARAL-KIDS Logo"
            className="w-[60px] h-[60px] large:w-[80px] large:h-[80px]"
          />
          {!open ? (
            <HiBars3
              className="h-[40px] w-[40px] desktop:hidden"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <HiMiniXMark
              className="h-[40px] w-[40px] desktop:hidden"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <div
          className={`${
            !open && "hidden"
          } desktop:inline desktop:w-[900px] large:w-[]`}
        >
          <ul className="font-semibold text-[18px] pl-[10px] desktop:flex desktop:justify-between">
            {pages.map((page) => {
              return (
                <li key={page.id} className="mt-2">
                  <Link to={page.address} smooth onClick={() => setOpen(!open)}>
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar;
