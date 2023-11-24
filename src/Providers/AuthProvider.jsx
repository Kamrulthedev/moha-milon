import { createContext } from "react";

const AuthContext = createContext (null)

const AuthProvider = () => {

    const authInfo = {name:'nodi sagor khal bill'}

    return (
        <AuthContext.Provider value={authInfo}>
           
      </AuthContext.Provider>  
        );
};

export default AuthProvider;
