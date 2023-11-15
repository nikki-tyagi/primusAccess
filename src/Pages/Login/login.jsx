import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // ... API login logic
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-page-container">
            <h2>Login</h2>
            <form className="login-page" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-page-input"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-page-input"
                    />
                </div>
                <button type="submit" className="login-page-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
