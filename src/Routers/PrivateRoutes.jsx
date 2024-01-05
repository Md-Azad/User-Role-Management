
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { loading, user} = useContext(AuthContext);
 

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <h1>Log in to browse this page</h1>;
};

export default PrivateRoutes;
