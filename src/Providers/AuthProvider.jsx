import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebesea/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";

export const AuthContext = createContext (null)

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
