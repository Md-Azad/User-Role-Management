
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  

  const signout = useContext(AuthContext);
  const {loginStatus,handleLogout} = signout;
  
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">User Management</a>
       
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
      
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
