import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, position) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      position: position,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  console.log(user);
  const [accessPermission, setAccessPermission] = useState("");
  const [userPosition, setUserPosition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        const email = user.email;

        try {
          const res = await axios.get(
            `http://localhost:5000/users/${email}`,
            {}
          );
          const permit = res.data.permission?.Permission;
          const position = res.data.position;

          if (position) {
            setUserPosition(position);
          } else {
            console.log("normal user");
          }

          if (permit) {
            setAccessPermission(permit);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchData();
  }, [user]);
  const authInfo = {
    loading,
    user,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    accessPermission,
    userPosition,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
