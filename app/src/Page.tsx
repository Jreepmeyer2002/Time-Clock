import { Component } from "react";
import Headings from "./Headings";
import {Col, Row, Container, Modal, ModalHeader} from "reactstrap";
import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";
import CreateAccount from "./CreateAccount";

type myProps = {
    
};

type myState = {
    toggleState: boolean
};

class Page extends Component<myProps, myState>{

    constructor(props: any){
        super(props);
        this.state = {
            toggleState: true
        };
        
    }

    showHide = () => {
        this.setState({toggleState: !this.state.toggleState})
    }

    newUser = () => {
        this.showHide();
    }

    render(){
        return(
            <body>
                <Headings/>
                <Container>
                    <Row>
                        <Col md="6"></Col>
                            <Col md="1"><ClockIn></ClockIn></Col>
                            <Col md="1"><ClockOut></ClockOut></Col>
                        <Col md="5"></Col>
                    </Row>
                    <Modal isOpen={this.state.toggleState} toggle={this.showHide} >
                        <ModalHeader toggle={this.showHide}>Create Account</ModalHeader>
                        <CreateAccount newUser={this.newUser}></CreateAccount>
                    </Modal>
                </Container>                
            </body>
        )
    }
} export default Page;