import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { ChatContext } from '../../context/ChatContext';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const { setUserData, createNewChat } = useContext(ChatContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    console.log(name, value);
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const userData={
    email:formData.email,
    password:formData.password
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    
    if (validateForm()) {
        try {
            const response = await api.post(
            "/auth/login",
            userData
        )
        console.log(response.data);
        
        // Extract user data from response
        const responseUser = response.data.user;
        let fullname = '';
        
        // Handle both object and string fullname formats
        if (typeof responseUser?.fullname === 'string') {
          fullname = responseUser.fullname;
        } else if (responseUser?.fullname?.firstname || responseUser?.fullname?.lastname) {
          fullname = `${responseUser.fullname.firstname || ''} ${responseUser.fullname.lastname || ''}`.trim();
        }
        
        // Store user data and token
        const token = response.data.token || 'demo-token';
        const userDataToStore = {
          email: responseUser?.email || formData.email,
          id: responseUser?._id || Date.now(),
          fullname: fullname || 'User',
          firstname: responseUser?.fullname?.firstname || '',
          lastname: responseUser?.fullname?.lastname || ''
        };

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userDataToStore));

        // Set user data in context
        setUserData(userDataToStore);

        // Create first chat
        createNewChat('Welcome Chat');

        alert('Login successful! Welcome to IkAIris');
        setFormData({
          email: '',
          password: '',
          rememberMe: false,
        });

        // Redirect to chat page
        navigate('/chat');
        } catch (error) {
            console.log(error.response.data);

            alert(error.response.data.msg);
        }
        
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your IkAIris account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={errors.password ? 'input-error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit" className="submit-btn">Sign In</button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="login-footer">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
