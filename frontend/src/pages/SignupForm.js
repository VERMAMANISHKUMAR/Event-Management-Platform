import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';  // Toastify CSS
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS

const API_BASE_URL = process.env.Frontend_API || 'http://localhost:3800';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true); // Disable button during API call

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, { email, password });

      if (response.status === 201) {
        toast.success('User created successfully');
        setEmail('');
        setPassword('');

        // Redirect to signin page with success message
        navigate('/signin', { state: { successMessage: 'Signup successful! Please log in.' } });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during signup';
      console.error('Signup Error:', errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '300px' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
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
            autoComplete="new-password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default SignupForm;
