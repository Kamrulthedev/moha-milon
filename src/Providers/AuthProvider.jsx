import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebesea/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";

export const AuthContext = createContext (null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)


    }
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observing current user', currentUser)
        })
    },[])

    const authInfo = {user, createUser, signInUser}

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
