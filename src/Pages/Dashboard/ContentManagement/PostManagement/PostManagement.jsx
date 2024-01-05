import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostManagement = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/dashboard/post")
        .then(res=>{
            console.log(res.data);
            setPosts(res.data);
        })
        .catch(err=>console.log(err));
    },[]);

  return (
    <div className="w-full min-h-screen px-12 mt-4">
      <div className="flex flex-row-reverse">
      <button className="btn btn-active btn-accent">
        <Link to="/dashboard/newpost">New Post</Link>
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
            {posts.map((post,index)=><tr key={post._id}>
              <th>{index+1}</th>
              <td>{post.title}</td>
              <td>{post.discription}</td>
              <td>Blue</td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostManagement;
