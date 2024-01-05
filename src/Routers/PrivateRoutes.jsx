// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";


// const PrivateRoutes = ({children}) => {
//     const [loading, user] = useContext(AuthContext);
//     if(loading){
//         <progress className="progress w-56"></progress>
//     }
//     if(!user){
//         return children;
        
//     }
//     if(user){
//         return <h1>Log in to browse this page</h1>
//     }
//     // return (
//     //     <div>
//     //         <h1>Your are not an user!</h1>
//     //     </div>
//     // );
// };

// export default PrivateRoutes;
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { loading, user} = useContext(AuthContext);
  console.log(loading,user);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <h1>Log in to browse this page</h1>;
};

export default PrivateRoutes;
