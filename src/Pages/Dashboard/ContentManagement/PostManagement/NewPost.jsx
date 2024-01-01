import axios from "axios";

import { useForm } from "react-hook-form";

const NewPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const title = data.title;
    const discription = data.discription
        axios.post("http://localhost:5000/dashboard/newpost",{
        title,
        discription
        
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  
  };
  console.log(errors);
  return (
    <div className="hero min-h-screen ">
      
        <div className="card shrink-0 w-1/2    ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered"
                {...register("title", {required: true, maxLength: 100})}
              />
            </div>
            <label className="label">
                <span className="label-text">Description</span>
              </label>
            <textarea className="textarea textarea-primary" placeholder="Bio" {...register("discription", {required: true, maxLength: 200})}></textarea>
           
            <div className="form-control mt-6">
          
              <input className="btn btn-primary" type="submit" value="POST" />
            </div>
          </form>
        </div>
    
    </div>
  );
};

export default NewPost;
