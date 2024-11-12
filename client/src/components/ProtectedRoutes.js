import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoutes = ({ allowedRoles }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!currentUser || !currentUser.role) {
    // Redirect to role selection or sign-in if no role is assigned
    return <Navigate to="/sign-in" replace />;
  } else if (allowedRoles.includes(currentUser.role)) {
    return <Outlet />;
  } else {
    // Unauthorized access
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default ProtectedRoutes;
