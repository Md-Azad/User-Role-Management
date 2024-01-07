import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const usePermission = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [extraPermission, setextraPermission] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setextraPermission(data);
        setLoading(false);
      });
  }, [email]);
  return [extraPermission, loading];
};

export default usePermission;
