import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = 'You must agree to terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {

            const nameParts = formData.fullName.trim().split(" ");

            const firstname = nameParts[0];

            const lastname = nameParts.slice(1).join(" ") || "Unknown";

            const userData = {
                fullname: {
                    firstname,
                    lastname
                },
                email: formData.email,
                password: formData.password
            };

            console.log(userData);

            try {

                const response = await api.post(
                    "/auth/register",
                    userData
                );
                console.log(response.data);
                alert("Registration successful! Please login.");
                navigate('/login');
            } catch (error) {

                console.log(error.response.data);

                alert(error.response.data.msg || 'Registration failed');

            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <div className="register-card">
                    <div className="register-header">
                        <h1>Create Account</h1>
                        <p>Join IkAIris and start your AI journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="register-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={errors.fullName ? 'input-error' : ''}
                            />
                            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                        </div>

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
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className={errors.password ? 'input-error' : ''}
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className={errors.confirmPassword ? 'input-error' : ''}
                            />
                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                        </div>

                        <div className="form-group checkbox">
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                            />
                            <label htmlFor="agreeTerms">
                                I agree to the Terms of Service and Privacy Policy
                            </label>
                            {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
                        </div>

                        <button type="submit" className="submit-btn">Create Account</button>
                    </form>

                    <div className="register-footer">
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
