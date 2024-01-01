import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoutes = ({children}) => {
    const [loading, user] = useContext(AuthContext);
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;