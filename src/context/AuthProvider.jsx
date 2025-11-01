import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // Use States
  const [loading, setLoading] = useState(true); //Loading State
  const [user, setUser] = useState(null); //User State

  const auth = getAuth(app);

  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  // Google Login
  const signInWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  // Yahoo Provider
  const yahooProvider = new OAuthProvider("yahoo.com");
  yahooProvider.addScope("profile");
  yahooProvider.addScope("email");
  // Yahoo Login
  const signInWithYahoo = () => {
    setLoading(false);
    return signInWithPopup(auth, yahooProvider);
  };

  // logout user
  const logout = () => {
    setLoading(false);
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

  const authInfo = {
    signInWithGoogle,
    loading,
    setUser,
    user,
    logout,
    googleProvider,
    signInWithYahoo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
