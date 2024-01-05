
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
}
const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const updateUserProfile =(name,position) =>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        position:position
      })
}

const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}




useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
         setUser(currentUser);
         console.log("current user: ",currentUser);
         setLoading(false);
     });
     return ()=>{
         return unsubscribe();
     }
 },[])

  const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        updateUserProfile,
        logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
