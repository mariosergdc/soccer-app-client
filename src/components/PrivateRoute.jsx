import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  if (loggedIn) return children;
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
