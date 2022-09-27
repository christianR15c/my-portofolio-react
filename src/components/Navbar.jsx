import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const specialChar = '/>';

  const [dropDownMenu, setDropDownMenu] = useState(false);

  const handleClick = (e) => setDropDownMenu(!dropDownMenu);
  const handleClose = (e) => setDropDownMenu(!dropDownMenu);

  return (
    <div className="w-screen h-[100px] fixed bg-slate-200 drop-shadow-lg z-20">
      <div className="px-[10%] flex justify-between items-center w-full h-full">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-3xl text-orange-500 font-italic mr-4 sm:text-[32px] lg:text-[40px] ">
            chris
            <span className=" text-regal-blue">
              Code
              <span className="text-orange-500 font-thin">{specialChar}</span>
            </span>
          </h1>
          <div className="flex items-center">
            <ul className="hidden md:flex text-regal-blue ">
              <li>
                <Link to="my home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={-150} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact us"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="articles" smooth={true} offset={-120} duration={500}>
                  Articles
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex h-[30px]">
              <button className="border-name text-slate-700 bg-transparent w-[90px] ">
                Sign In
              </button>
            </div>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!dropDownMenu ? (
              <MenuIcon className="w-8 text-orange-500 mr-6 cursor-pointer" />
            ) : (
              <XIcon className="w-8 text-orange-500 mr-6 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <ul
        className={
          !dropDownMenu
            ? 'hidden'
            : 'absolute bg-slate-200 w-full text-regal-blue md:hidden'
        }
      >
        <li className="border-y-2 border-zinc-300 w-full pl-9">
          <Link onClick={handleClose} to="my home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-y-2 border-zinc-300 w-full pl-9">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-y-2 border-zinc-300 w-full pl-9">
          <Link
            onClick={handleClose}
            to="articles"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Articles
          </Link>
        </li>
        <li className="border-y-2 border-zinc-300 w-full pl-9">
          <Link
            onClick={handleClose}
            to="contact us"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
        <li className="border-y-2 border-zinc-300 w-full pl-9">
          <Link
            onClick={handleClose}
            to="services"
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <div className="flex my-5 mx-9">
          <button className="h-[40px] w-full">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
