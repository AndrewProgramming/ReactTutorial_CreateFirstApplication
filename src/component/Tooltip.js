import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from "./Header";
import {Tooltip} from 'reactstrap';


export default class MyTooltip extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <Container>
                <Header/>
                <div>
                    <p>Somewhere in here is a <span style={{textDecoration: "underline", color: "blue"}} href="#"
                                                    id="TooltipExample">tooltip</span>.</p>
                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample"
                             toggle={this.toggle}>
                        Hello world!
                    </Tooltip>
                </div>
            </Container>

        );
    }
}