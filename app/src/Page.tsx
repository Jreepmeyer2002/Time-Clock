import { Component } from "react";
import Headings from "./Headings";
import {Col, Row, Container, Modal, ModalHeader} from "reactstrap";
import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";
import "./App.css";

class Page extends Component{

    render(){
        return(
            <div className="home">
                <Headings/>
                <div className="time-keeping">
                <Container>
                    <Row>
                        <Col>
                            <ClockIn />
                        </Col>
                        <Col>
                            <ClockOut />
                        </Col>
                    </Row>
                </Container>
                </div>               
            </div>
        )
    }
} export default Page;