import axios from "axios";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const EditPost = () => {
  const {
    register,
    handleSubmit,
    
  } = useForm();
  const location = useLocation();
  const postId = location.state?.from;
  console.log(postId)
  const navigate = useNavigate();

  const [post, setPost] = useState([])

  useEffect(()=>{
    
    axios
      .get(`http://localhost:5000/dashboard/postedit/${postId}`)
      .then((resPost) => {
        console.log("receiving post: ", resPost)
        setPost(resPost.data)
      })
      .catch((er) => console.error(er));
  },[postId])
  

  const onSubmit = (data) => {
    console.log(data.label,data.dis);
    axios.patch(`http://localhost:5000/dashboard/postedit/${postId}`,{
        ...post,
        title:data.label,
        discription:data.dis
    })
    .then(resUpdate=>{
        console.log(resUpdate)
        if(resUpdate.data.modifiedCount>0){
            navigate('/dashboard/postmanage')
        }
    })
    .catch(err=>console.error(err))
  };
  

  return (
    <div className="hero min-h-screen ">
      <div className="card shrink-0 w-1/2 ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              
              defaultValue={post.title}
              className="input input-bordered"
              {...register("label", { required: true, maxLength: 100 })}
            />
          </div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            
            defaultValue={post.discription}
            {...register("dis", { required: true, maxLength: 200 })}
          ></textarea>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Edit" />
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default EditPost;
