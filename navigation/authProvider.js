import React, { createContext, useState } from 'react';

import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login: async (email, password) => {
          // TODO
          setLoading(true);
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              setUser(userCredential.user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error(error);
            });
          setLoading(false);
        },
        register: async (displayName, email, password) => {
          //setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const currentUser = userCredential.user;
            updateProfile(currentUser, {
              displayName: displayName
            })
          //setLoading(false)
        },
        logout: async () => {
          // TODO
          //setLoading(true);
try {
await signOut(auth);
setUser(null);
} catch (error) {
const errorCode = error.code;
const errorMessage = error.message;
console.error(error);
}
setLoading(false);

        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}