import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/posts")
    .then((res) => {
    //   console.log(res.data.response.posts.data);
      setPosts(res.data.response.posts.data);
    })
    .catch((err) => console.error(err));
  }, [])
  return <div className="text-center my-14">
    {
        posts.map((post)=><Post key={post.id} post={post}></Post>)
        
    }
    </div>;
};

export default Posts;
