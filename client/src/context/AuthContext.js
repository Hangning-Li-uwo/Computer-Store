import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../components/firebase";
import { reactLocalStorage } from "reactjs-localstorage";
import { doc, getDoc, collection } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState(() => {
    const currentUser = reactLocalStorage.get("currentUser", undefined);
    if (currentUser === undefined || currentUser === null) {
      return null;
    } else {
      return currentUser;
    }
  });

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) { 
        // fetch user data according to UID
        const userDocRef = doc(collection(db, "Profiles"), user.uid);
        const fetchUserDoc = async () => {
          try {
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
              // console.log("User data:", userDoc.data());
              setcurrentUser(userDoc.data()); 
              reactLocalStorage.set("currentUser", userDoc.data())
            } else {
              console.log("No such user document!");
            }
          } catch (error) {
            console.error("Error fetching user document:", error);
          } finally{
            setLoading(false);
          }
        };

        // Call the async function
        fetchUserDoc();
      } else {
        reactLocalStorage.remove("currentUser");
        setcurrentUser(null);
        console.log("No user is signed in.");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, loading}}>{children}</AuthContext.Provider>
  );
}
