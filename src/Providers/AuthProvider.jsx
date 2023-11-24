import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebesea/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";

export const AuthContext = createContext (null)

const providered = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const createUser = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)


    }

    const signInWithGoogle = ()=>{
        setLoding(true)
        return signInWithPopup(auth, providered)
    }
       
    const logOut = () =>{
        setLoding(true)
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('observing current user', currentUser)
            setUser(currentUser);
            setLoding(false)
        })
        return () =>{
            unSubscribe();
        } 
    },[])

    const authInfo = {
        user,
        loding,
        createUser, 
        signInUser,
        signInWithGoogle,
        logOut
}

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
      </AuthContext.Provider>  
        );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;
