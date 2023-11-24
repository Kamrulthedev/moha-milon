import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Pribate = ({children}) => {
    const { user, loding } = useContext(AuthContext);
    if(loding){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

    return <Navigate to={'/Login'}></Navigate>

  };
  Pribate.propTypes ={
    children: PropTypes.node
}


export default Pribate;