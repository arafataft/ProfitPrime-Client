import { NavLink, Outlet } from "react-router-dom";
import { FaBattleNet, FaHandsHelping, FaHome, FaPaypal, FaUser } from "react-icons/fa";
import { FcDatabase } from "react-icons/fc";
import { AiFillCaretRight } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import useVerifyAdmin from "../../Hooks/useVerifyAdmin";

const Dashboard = () => {

  const { user } = useContext(AuthContext);

  // const [checkAdmin] = useVerifyAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary bg-gradient-to-r from-green-600 to-green-900 text-white drawer-button mt-10 md:my-10 lg:hidden"
          >
            Open
          </label>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-green-600 to-green-900 text-white text-xl">
            {
              user === "admin" ?
                <>
                  <li>
                    <NavLink to={"/dashboard/adminhome"} className="hover:text-white hover:bg-green-700">
                      <FaUser></FaUser> Users Info
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/adminhome"} className="hover:text-white hover:bg-green-700">
                      <FaUser></FaUser> Users Progress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/adminhome"} className="hover:text-white hover:bg-green-700">
                      <FaUser></FaUser> Manage Users
                    </NavLink>
                  </li>
                </>
                :
                <>
                  <li>
                    <NavLink to={"/dashboard/dai"} className="hover:text-white hover:bg-green-700">
                      <FcDatabase /> Data Insight
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/bo"} className="hover:text-white hover:bg-green-700">
                      <AiFillCaretRight /> Business Info
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/comps"} className="hover:text-white hover:bg-green-700">
                      <FaBattleNet /> Competitor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"} className="hover:text-white hover:bg-green-700">
                      <FaPaypal></FaPaypal> Payment History
                    </NavLink>
                  </li>
                </>
            }

            <div className="divider"></div>

            <li>
              <NavLink to={"/"} className="hover:text-white hover:bg-green-700">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/help"} className="hover:text-white hover:bg-green-700">
                <FaHandsHelping /> Help
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
