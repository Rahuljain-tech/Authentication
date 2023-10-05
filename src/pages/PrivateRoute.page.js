import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
 
const PrivateRoute = () => {
 
 
 const { user } = useContext(UserContext);
 const userlocation = useLocation();
 const redirectLoginUrl = `/login?redirectTo=${encodeURI(userlocation.pathname)}`;
 
 
 return !user ? <Navigate to={redirectLoginUrl} /> : <Outlet /> ;
}
 
export default PrivateRoute;