import { Component } from "react";
import Headings from "./Headings";
import {Col, Row, Container, Modal, ModalHeader} from "reactstrap";
import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";
import CreateAccount from "./CreateAccount";
import "./App.css";

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
                <div className="time-keeping">
                    <ClockIn />
                    <ClockOut />
                </div>               
            </body>
        )
    }
} export default Page;