import { Component } from "react";
import Headings from "./Headings";
import {Col, Row, Container} from "reactstrap";
import ClockInOut from "./ClockInOut";

class Page extends Component{
    render(){
        return(
            <body>
                <Headings/>
                <Container>
                    <Row>
                        <ClockInOut></ClockInOut>
                    </Row>
                </Container>                
            </body>
        )
    }
} export default Page;