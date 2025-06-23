import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AfterLogin from "./AfterLogin";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        handlelogin(e);
    };

    const handlelogin = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.success) {
            setMessage(`Welcome,${username}`)
            navigate("/AfterLogin", { state: { username } })
        }
        else {
            setMessage("Invalid username or password")
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>

                <label className="login-label">Username</label>
                <input type="text" name="username" required className="login-input" onChange={(e) => setUsername(e.target.value)} />

                <label className="login-label">Password</label>
                <input type="password" name="password" required className="login-input" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="login-button">Login</button>

                <p className="login-message">{message}</p>
            </form>
        </div>
    );
}
export default Login;