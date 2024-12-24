import { Link, NavLink } from "react-router";

const Nav = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Doctor", path: "/findDoctor" },
    { name: "About Us", path: "/" },
  ];

  return (
    <div className="navbar bg-yellow-50 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `btn btn-ghost text-start ${isActive ? "base_text" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost font_dinpro_bold text-xl md:text-2xl lg:text-3xl base_text">
          A M R U T A M
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `btn btn-ghost text-xl ${isActive ? "base_text" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn py-0 px-8 bg-green-800 hover:bg-green-600 text-white font-semibold md:py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
