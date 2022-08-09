import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setauthError] = useState(" ");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    
    // Login user
    const loginUser = (email,password,location, history)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location.state?.from || '/purchase';
                history(destination);
        //   setUser(user);
        })
        .catch((error) => {
          setauthError(error.message)
        });
    }
   
    // Create new user register 

    const registerUser = (email, password,name,location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
              
                
                const newUser = {email, displayName : name};
                setUser(newUser)
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
                  const destination = location.state?.from || '/';
                  history(destination);
                  setauthError(" ") ;
            })
            .catch((authError) => {
                setauthError(authError.message)
            })
            .finally(()=>setIsLoading(false))

    }


    // signIn Using Google
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location.state?.from || '/';
                history(destination);
                // The signed-in user info.
                setUser(result.user);
                // sessionStorage.setItem("email", result.user.email);
            })
            .catch((authError) => {
                setauthError(authError.message)
            })
            .finally(()=>setIsLoading(false))
    }

    // Logout implement 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((authError) => {
            setauthError(authError.message);
        })
            .finally(() => setIsLoading(false));
    }

    // Observer user state
    useEffect(() => {
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {
                setUser({})
            }

            setIsLoading(false)

        });
        return ()=> unsubscribe;

    }, [])

    return {
        signInUsingGoogle,
        user,
        authError,
        logOut,
        isLoading,
        registerUser,
        loginUser

    }

}
export default UseFirebase;