import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';  // Toastify CSS
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the POST request to the signup API
      const response = await axios.post('https://event-management-platform-1-6x8a.onrender.com/api/auth/signup', { email, password });

      if (response.status === 201) {
        toast.success('User created successfully');
        setEmail('');
        setPassword('');
        // Redirect to the signin page with success message passed as state
        navigate('/signin', { state: { successMessage: 'Signup successful! Please log in.' } });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error signing up';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '250px'}}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
