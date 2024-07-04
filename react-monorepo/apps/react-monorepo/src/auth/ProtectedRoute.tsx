import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
