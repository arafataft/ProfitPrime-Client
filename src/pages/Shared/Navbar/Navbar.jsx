import { Link } from "react-router-dom";
import logo from "../../../assets/profit-up.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useVerifyAdmin from "../../../Hooks/useVerifyAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(false);
  const [showLinks1, setShowLinks1] = useState(false);
  const [checkAdmin] = useVerifyAdmin()

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const toggleLinks1 = () => {
    setShowLinks1(!showLinks1);
  };
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-green-900 text-white font-bold fixed z-10 top-0 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 text-white hover:text-white rounded-box w-52"
          >
            <Link to={"/"}>
              <li>
                <a className="hover:text-white hover:bg-green-700">Home</a>
              </li>
            </Link>
            <li onMouseEnter={toggleLinks1} onMouseLeave={toggleLinks1}>
              <summary className="hover:text-white hover:bg-green-700">
                Products
              </summary>
              {showLinks1 && (
                <ul className="p-2 bg-green-900 text-white rounded-xl absolute top-0 left-32">
                  <Link to={"/dataAnalysis"}>
                    <li className="hover:bg-green-700 p-2 rounded-lg">
                      Data Analysis & Insights
                    </li>
                  </Link>
                  <Link to={"/consulting"}>
                    <li className="hover:bg-green-700 p-2 rounded-lg">
                      Consulting Services
                    </li>
                  </Link>
                  <Link to={"/businessoption"}>
                    <li className="hover:bg-green-700 p-2 rounded-lg">
                      Business optimization
                    </li>
                  </Link>
                  <Link to={"/competitor"}>
                    <li className="hover:bg-green-700 p-2 rounded-lg">
                      Competitor Solution
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            {
              checkAdmin ?
                <>
                  <Link to="/pricing">
                    <li>
                      <a className="hover:text-white hover:bg-green-700 hidden">Pricing</a>
                    </li>
                  </Link>
                </>
                :
                <>
                  <Link to="/pricing">
                    <li>
                      <a className="hover:text-white hover:bg-green-700">Pricing</a>
                    </li>
                  </Link>
                </>
            }

            <li onMouseEnter={toggleLinks} onMouseLeave={toggleLinks}>
              <summary className="hover:text-white hover:bg-green-700">
                Customers
              </summary>
              {showLinks && (
                <ul className="p-2 bg-green-900 text-white rounded-xl absolute top-0 left-32">
                  <Link to="/customerService">
                    <li className="hover:bg-green-700 p-2 rounded-lg">
                      Limited Service Hotel
                    </li>
                  </Link>
                  <Link to="/hybridcustomer">
                    <li className="my-2 hover:bg-green-700 p-2 rounded-lg">
                      Hybrid Accommodation
                    </li>
                  </Link>
                  <Link to="/upscale">
                    <li className="my-2 hover:bg-green-700 p-2 rounded-lg">
                      Upscale & Luxury Hotel
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <Link to={"/contact"}>
              <li>
                <a className="hover:text-white hover:bg-green-700">Contact</a>
              </li>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard/dataRevenue">
                  <li>
                    <a className="hover:text-white hover:bg-green-700">
                      Dashboard
                    </a>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/dataRevenue">
                  <li>
                    <a className="hover:text-white hidden hover:bg-green-700">
                      Dashboard
                    </a>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
        <img src={logo} alt="" className="h-10 w-10" />
        <a className="btn btn-ghost normal-case text-xl">Profit Prime</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={"/"}>
            <li>
              <a className="hover:text-white hover:bg-green-700">Home</a>
            </li>
          </Link>
          <li onMouseEnter={toggleLinks1} onMouseLeave={toggleLinks1}>
            <summary className="hover:text-white hover:bg-green-700">
              Products
            </summary>
            {showLinks1 && (
              <ul className="p-2 bg-green-900 text-white rounded-xl absolute top-full right-0">
                <Link to={"/dataAnalysis"}>
                  <li className="hover:bg-green-700 p-2 rounded-lg">
                    Data Analysis & Insights
                  </li>
                </Link>
                <Link to={"/consulting"}>
                  <li className="hover:bg-green-700 p-2 rounded-lg">
                    Consulting Services
                  </li>
                </Link>
                <Link to={"/businessoption"}>
                  <li className="hover:bg-green-700 p-2 rounded-lg">
                    Business optimization
                  </li>
                </Link>
                <Link to={"/competitor"}>
                  <li className="hover:bg-green-700 p-2 rounded-lg">
                    Competitor Solution
                  </li>
                </Link>
              </ul>
            )}
          </li>
          {
            checkAdmin ?
              <>
                <Link to="/pricing">
                  <li>
                    <a className="hover:text-white hover:bg-green-700 hidden">Pricing</a>
                  </li>
                </Link>
              </>
              :
              <>
                <Link to="/pricing">
                  <li>
                    <a className="hover:text-white hover:bg-green-700">Pricing</a>
                  </li>
                </Link>
              </>
          }

          <li onMouseEnter={toggleLinks} onMouseLeave={toggleLinks}>
            <summary className="hover:text-white hover:bg-green-700">
              Customers
            </summary>
            {showLinks && (
              <ul className="p-2 bg-green-900 text-white absolute rounded-xl top-full right-0">
                <Link to="/customerService">
                  <li className="hover:bg-green-700 p-2 rounded-lg">
                    Limited Service Hotel
                  </li>
                </Link>
                <Link to="/hybridcustomer">
                  <li className="my-2 hover:bg-green-700 p-2 rounded-lg">
                    Hybrid Accommodation
                  </li>
                </Link>
                <Link to="/upscale">
                  <li className="my-2 hover:bg-green-700 p-2 rounded-lg">
                    Upscale & Luxury Hotel
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <Link to={"/contact"}>
            <li>
              <a className="hover:text-white hover:bg-green-700">Contact</a>
            </li>
          </Link>
          {user ? (
            <>
              <Link to="/dashboard/showhome">
                <li>
                  <a className="hover:text-white hover:bg-green-700">
                    Dashboard
                  </a>
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard/showhome">
                <li>
                  <a className="hover:text-white hidden hover:bg-green-700">
                    Dashboard
                  </a>
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link
            onClick={handleLogOut}
            className="hover:bg-green-700 p-3 rounded-md"
          >
            Logout
          </Link>
        ) : (
          <Link className="hover:bg-green-700 p-3 rounded-md" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
