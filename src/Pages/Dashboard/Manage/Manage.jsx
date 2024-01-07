import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Manage = () => {
const {accessPermission, userPosition} = useContext(AuthContext)
console.log(accessPermission,userPosition)

  return (
    <div>
      
      {/* Render other rule properties as needed */}
    </div>
  );
};

export default Manage;
