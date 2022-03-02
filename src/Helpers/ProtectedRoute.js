import React from 'react';
import { Navigate } from 'react-router';

function ProtectedRoute({ children }) {
  const login = false;
  return login ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
