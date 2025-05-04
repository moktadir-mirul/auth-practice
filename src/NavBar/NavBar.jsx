import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../Firebase/Firebase.init";

const NavBar = () => {
  const { userData, userLogout } = use(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => console.log("user logged out success"))
      .catch((err) => console.log(err));
      
  };

  const Links = (
    <>
      <li>
        <NavLink to={"/"}>
          <div>
            <button>Home</button>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/signup"}>
          <div>
            <button>Sign Up</button>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/signin"}>
          <div>
            <button>Sign In</button>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>
          <div>
            <button>Blogs</button>
          </div>
        </NavLink>
      </li>
      {userData && (
        <>
          <li>
            <NavLink to={"/contacts"}>
              <div>
                <button>Contacts</button>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/info"}>
              <div>
                <button>Info</button>
              </div>
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Firebase-Auth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {userData ? (
            <button onClick={handleLogout} className="btn">
              Log Out
            </button>
          ) : (
            <Link to={"/signin"}>
              <button className="btn">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
