import { Component } from "react";
import {ModalBody, Label, Input, ModalFooter, Button} from "reactstrap";

type myProps = {
    newUser(): any
};

type myState = {
    data: [any],
    currentUser: number
};

class CreateAccount extends Component<myProps, myState>{

    constructor(props: any){
        super(props)
        this.state = {
            data : [0],
            currentUser: 0
        };
    }

    updateFName = (e: any) =>{
        var copy = this.state.data;
        copy[this.state.currentUser][0] = e.target.value;
        this.setState({data: copy})
    }

    updateLName = (e: any) =>{
        var copy = this.state.data;
        copy[this.state.currentUser][1] = e.target.value;
        this.setState({data: copy})
    }

    updateUsername = (e: any) =>{
        var copy = this.state.data;
        copy[this.state.currentUser][2] = e.target.value;
        this.setState({data: copy})
    }

    updatePassword = (e: any) =>{
        var copy = this.state.data;
        copy[this.state.currentUser][3] = e.target.value;
        this.setState({data: copy})
    }

    newUser = () =>{
            this.props.newUser();
    }


    render(){
        return(
            <div>
                <ModalBody>
                    <Label for="field1">First Name</Label>
                        <Input id="field1" name="first_name" value={this.state.data[this.state.currentUser][0]} type="text" onChange={this.updateFName}/>
                    <Label for="field2">Last Name</Label>
                        <Input id="field2" name="last_name" value={this.state.data[this.state.currentUser][1]} type="text" onChange={this.updateLName}/>
                    <Label for="field3">Username</Label>
                        <Input id="field3" name="username" value={this.state.data[this.state.currentUser][2]} type="text" onChange={this.updateUsername}/>
                    <Label for="field4">Password</Label>
                        <Input id="field4" name="warning_cap" value={this.state.data[this.state.currentUser][3]} type="text" onChange={this.updatePassword}/>
                </ModalBody>
                <ModalFooter>
                        <Button color='success' onClick={this.newUser}>Create Account</Button>
                </ModalFooter>
            </div>
        )
    }
} export default CreateAccount;