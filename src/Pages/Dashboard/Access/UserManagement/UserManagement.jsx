import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserManagement = () => {
    const [users, setUser] = useState([]);
    

    useEffect(()=>{
        axios.get("http://localhost:5000/users")
        .then(res =>{
            // console.log(res.data);
            setUser(res.data)
        })
        .catch(err=>console.error(err))
    },[])

    return (
        <div className="w-full min-h-screen px-12 mt-4">
      <div className="flex flex-row-reverse">
      <button className="btn btn-active btn-accent">
        <Link to="/dashboard/newpost">New User</Link>
      </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=><tr key={user._id}>
              <th>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button ><Link to={`/dashboard/roleedit/${user.email}`} state={{ from: user.email }}>action</Link></button></td>
              {/* <td><button onClick={()=>handleUserRole(user.email)} >action</button></td> */}
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default UserManagement;