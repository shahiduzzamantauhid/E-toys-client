import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <div className="text-center my-12"><progress className="progress w-56"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace={true}/>;
};

export default PrivateRoute;