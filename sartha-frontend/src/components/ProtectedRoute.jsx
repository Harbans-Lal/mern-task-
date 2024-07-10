// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { myContext } from '../App';

const ProtectedRoute = ({ element }) => {
  const { valid } = useContext(myContext);
  return valid ? element : <Navigate to="/signIn" />;
};

export default ProtectedRoute;
