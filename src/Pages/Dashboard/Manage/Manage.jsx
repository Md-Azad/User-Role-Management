import { useForm } from "react-hook-form";



const Manage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.label,data.dis);
  };
  console.log(errors);


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
              defaultValue="titlesdf"
              className="input input-bordered"
              {...register("label", { required: true, maxLength: 100 })}
            />
          </div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            defaultValue="details"
            {...register("dis", { required: true, maxLength: 200 })}
          ></textarea>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="POST" />
          </div>
        </form>
        
      </div>
    </div>
    
  );
};

export default Manage;
