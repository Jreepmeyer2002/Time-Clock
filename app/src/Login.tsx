import React, { useState } from "react";
import {Navigate} from "react-router-dom";
import './App'

const Login = () => {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // TODO: Implement login logic
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
        }
    };
    if (loggedIn) {
      return <Navigate to="/home" />
    }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
