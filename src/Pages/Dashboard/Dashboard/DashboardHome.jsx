import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";



const DashboardHome = () => {
    const {logOut} = useContext(AuthContext);
   
    const navigation = useNavigate();
    const handleSignOut=()=>{
        logOut()
        .then(()=>{
            alert("successfully logged Out!")
            navigation('/')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="flex justify-evenly">
            <h1>dashboard Home</h1>
            <button onClick={handleSignOut} className="btn btn-error">Sign Out</button>
        </div>
    );
};

export default DashboardHome;