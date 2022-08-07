import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(" ");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

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
            .catch((error) => {
                setError(error.message)
            });
    }

    // Logout implement 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    // Simple onAuth state change 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {

            }
            setIsLoading(false)
        });
    }, [])

    return {
        signInUsingGoogle,
        user,
        error,
        logOut,
        isLoading

    }

}
export default UseFirebase;