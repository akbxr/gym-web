"use client";

import Nav from "./nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderAcitve] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scoll
      setHeaderAcitve(window.scrollY > 50);
    };
    // add scroll event
    window.addEventListener("scroll", handleScroll);
    // clear scroll event
    window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${headerActive ? "h-[70px]" : "h-[70px]"
        } fixed top-0 w-full  bg-primary-200 transition-all z-50 font-oswald`}
    >
      <div className="mx-5 h-full flex items-center justify-between">
        {/* logo */}
        <Link href={"/"}>
          <Image
            priority
            src={"/assets/img/img.png"}
            alt="logo"
            width={55}
            height={55}
          />
        </Link>
        {/* mobile nav -hidden on large device */}
        <div className="flex justify-end items-center w-full">
          <MobileNav
            containerStyles={`${headerActive ? "top-[70px]" : "top-[70px]"}
          ${openNav
                ? "max-h-max pt-8 pb-10 border-t border-white/10"
                : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
              }
          flex flex-col text-center gap-4 bg-primary-200 fixed w-full left-0 xl:hidden text-white text-base uppercase font-medium transition-all`}
          />
          {/* destop nav - hidden on small device */}
          <Nav containerStyles="flex gap-6 text-white hidden xl:flex uppercase font-medium transition-all" />
          {/* hide/open menu button */}
          <div className="flex items-center gap-4}}">

            <button
              onClick={() => setOpenNav(!openNav)}
              className="text-white xl:hidden"
            >
              <MdMenu className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
