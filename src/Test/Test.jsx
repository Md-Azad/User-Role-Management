import axios from "axios";
import { useEffect, useState } from "react";



const Test = () => {
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);

useEffect(()=>{
    axios.get("http://localhost:8000/api/v1/administrator/users", {
        headers: {
            Authorization: `${token}`
        }
    })
    .then(res=>{
        console.log(res.data.response.users)
        setUsers(res.data.response.users)
    })
    .catch(err=>console.error(err))
},[token])
  
    
    return (
        <div className="my-12 ml-24 ">
           { users.map((user)=>console.log(user))}
        </div>
    );
};

export default Test;