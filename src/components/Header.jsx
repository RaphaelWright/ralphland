import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="flex py-6">
        <h1 className="mr-auto text-xl font-bold pl-24">WOODPECKR</h1>

        <ul className=" flex px-5 ml-auto mr-20 space-x-10 uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/about">About</Link>
          <li></li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default Header;
