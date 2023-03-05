import React, { useState } from "react";
import {Label, Input, Button, Form, Container, Row, Col} from "reactstrap";
import {Navigate} from "react-router-dom";
import './App';
import Page from "./Page";

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
    <div style={{textAlign: "center", fontFamily: "Arial, Helvetica, serif"}} className="login-page">
      <h1>Welcome to RIT Time</h1>
      <Container>
        <Form onSubmit={handleLogin}>
          <Row>
            <Col>
              <Label>
                Username:
              <Input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              </Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>
                Password:
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Label>
            </Col>
          </Row>
            <Label></Label>
            <Row>
              <Col sm={12}>
                <Button color="success" type="submit">Login</Button>
              </Col>
            </Row>
            <Label></Label>
            <Row>
              <Col sm={12}>
                <Button color="info">Create Account</Button>
              </Col>
            </Row>
        </Form>
      </Container>
      
    </div>
  );
};

export default Login;
