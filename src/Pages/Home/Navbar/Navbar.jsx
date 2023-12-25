import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userStatus = localStorage.getItem("user");

  const token = localStorage.getItem("token");
  const [loginStatus, setLoginStatus] = useState(userStatus);

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8000/api/v1/logout",
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.response.message);

        if (res.data.response.message === "Logout succesfull") {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setLoginStatus("");
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <a className="btn btn-ghost text-xl">Home</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li>
            <Link to="/test">test</Link>
          </li>
          {!loginStatus ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li onClick={handleLogout}>
              <Link>LogOut</Link>
            </li>
          )}

          <li>
            <Link to="/register">Register</Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
