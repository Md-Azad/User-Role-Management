
import usePermission from "../../../hooks/usePermission";




const Manage = () => {

  const [extraPermission] = usePermission();
  console.log(extraPermission)




  return (
    <div className="hero min-h-screen ">
      
      <div className="card shrink-0 w-1/2 ">
   
        <h1>hello</h1>
        
      </div>
    </div>
    
  );
};

export default Manage;
