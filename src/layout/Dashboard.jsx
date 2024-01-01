import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [accessOpen, setAccessOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);

  const toggleAccess = () => {
    setAccessOpen(!accessOpen);
  };

  const toggleContent =()=>{
      setContentOpen(!contentOpen)
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
         
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <a onClick={toggleAccess}>Access</a>
            {accessOpen && (
              <ul>
              
                <li> <Link to="/dashboard/usermanage">User Management</Link> </li>

               
                <li> <Link to="/dashboard/rolemanage">Role Management</Link> </li>
              </ul>
            )}
          </li>

          <li>
            <a onClick={toggleContent}>Content management</a>
            {
              contentOpen && (
                <ul>
                  <li><Link to="/dashboard/postmanage">Post Manage</Link></li>
                </ul>
              )
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
