import React, { useState } from "react";
import {Label, Input, Button, Form, Container, Row, Col, ModalBody, ModalFooter, ModalHeader, Modal, Alert} from "reactstrap";
import {Navigate} from "react-router-dom";
import './App.css';

const Login = () => {

    const initialUsers = [{username: '1', password: 'password'},];
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [Fname, setFName] = useState("");
    const [Lname, setLname] = useState("");
    const [toggleState, setToggleState] = useState(false);
    const [toggleStateAlert, setToggleStateAlert] = useState(false);
    const [users, setUsers] = useState(initialUsers)
    
  
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        
        fetch('api/time/user/' + username + "/" + password)
         .then( 
          (response) => 
          {
              if(response.status === 200){
                setLoggedIn(true);
              }
          }
      )
      .catch((error) =>
          {console.log(error);
              updateUsers("");
          })


        
    };

    if (loggedIn) {
      return <Navigate to="/home" />
    }

    const showHide = () => {
      setToggleState(!toggleState);
    }

    const showHideAlert = () => {
      setToggleStateAlert(!toggleStateAlert);
    }

    const updateUsers = (apiResponse: any) => {
      console.log(apiResponse);
        setUsers([...users, apiResponse]);
    }

    const createUser = () => {
      showHide();
      fetch('api/time/new', {
            method: 'POST',
            body: JSON.stringify({
                fname: Fname,
                lname: Lname,
                username: username,
                companyID: 1,
                password: password,
            }),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response =>{
            return response.json()
        })
    }


  return (
    <div style={{textAlign: "center"}} className="login-page">
      <h1>Welcome to RIT Time</h1>
      <Modal isOpen={toggleStateAlert}>
        <ModalHeader toggle={showHideAlert}>Error</ModalHeader>
        <ModalBody>
            Invalid username/password
        </ModalBody>
      </Modal>
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
                <Button color="success" type="submit" onClick={showHideAlert}>Login</Button>
              </Col>
            </Row>
            <Label></Label>
            <Row>
              <Col sm={12}>
                <Button color="info" onClick={showHide}>Create Account</Button>
              </Col>
            </Row>
        </Form>
      </Container>
      <div>
      <Modal isOpen={toggleState} toggle={showHide} >
          <ModalHeader toggle={showHide}>Create Account</ModalHeader>                   
        <ModalBody>
          <Label for="field1">First Name</Label>
            <Input id="field1" name="first_name" value={Fname} type="text" onChange={(event) => setFName(event.target.value)}/>
              <Label for="field2">Last Name</Label>
                <Input id="field2" name="last_name" value={Lname} type="text" onChange={(event) => setLname(event.target.value)}/>
                  <Label for="field3">Username</Label>
                    <Input id="field3" name="username" value={username} type="text" onChange={(event) => setUsername(event.target.value)}/>
                  <Label for="field4">Password</Label>
                    <Input id="field4" name="warning_cap" value={password} type="text" onChange={(event) => setPassword(event.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={createUser}>Create Account</Button>
          </ModalFooter>
          </Modal>
        </div>
    </div>
  );
};
export default Login;
