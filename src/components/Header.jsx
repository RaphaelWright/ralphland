import { Outlet, Link } from "react-router-dom";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="">
      <div className="flex py-6 ">
        <h1 className="mr-auto text-2xl text-[#0a5c36] font-bold pl-24">
          <Link to="/">WOODPECKR</Link>
        </h1>

        <ul className=" flex px-5 ml-auto mr-20 space-x-10 text-[#fffff0] uppercase">
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

        <Outlet />
      </div>
    </div>
  );
};

export default Header;
