import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-screen bg-[#1b1b1b] shadow-md ">
      <div className="md:flex py-6">
        <h1 className="flex pl-10 md:mr-auto md:text-2xl text-[#0a5c36] font-bold md:pl-24">
          <Link to="/">WOODPECKR</Link>
          <Menu className="md:hidden ml-auto mr-10 cursor-pointer" onClick={toggleMenu} />
        </h1>

        <ul className={`hidden md:flex px-5 ml-auto mr-20 space-x-10 text-[#fffff0] uppercase ${menuOpen ? "block" : "hidden"} md:block`}>
          <li className="hover:text-[#0a5c36]">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-[#0a5c36]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#0a5c36]">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <button className="px-5 py-1 bg-[#0a5c36] font-medium text-black w-36 shadow-l shadow-[#000000] hover:border hover:bg-transparent hover:text-[#0a5c36] hover:font-medium hover:border-[#0a5c36] flex items-center justify-center gap-2">
              <Download size={16} strokeWidth={2} />
              Résumé
            </button>
          </li>
        </ul>

        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#1b1b1b] shadow-md">
            <ul className="flex flex-col px-5 py-6 space-y-4 text-[#fffff0] uppercase">
              <li className="hover:text-[#0a5c36]">
                <Link to="/projects" onClick={toggleMenu}>Projects</Link>
              </li>
              <li className="hover:text-[#0a5c36]">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
              <li className="hover:text-[#0a5c36]">
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className="">
                <button className="px-5 py-1 bg-[#0a5c36] font-medium text-black w-36 shadow-l shadow-[#000000] hover:border hover:bg-transparent hover:text-[#0a5c36] hover:font-medium hover:border-[#0a5c36] flex items-center justify-center gap-2">
                  <Download size={16} strokeWidth={2} />
                  Résumé
                </button>
              </li>
            </ul>
            <X className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu} />
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default Header;
