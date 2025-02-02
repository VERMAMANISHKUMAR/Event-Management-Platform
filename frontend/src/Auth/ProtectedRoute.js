import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
     
     

        const response = await axios.get('http://localhost:3800/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

    
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
 
          console.error('Token verification failed:', response.status, response.data);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Token verification failed', error);
        setIsAuthenticated(false);
      }
    };

    checkTokenValidity();
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
