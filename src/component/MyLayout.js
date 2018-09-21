import {Container, Row, Col} from 'reactstrap';
import React, {Component} from 'react';

import Example from "./Example";
import Header from "./Header";

export default class MyLayout extends Component {

    render() {
        return (
            <Container>
                <Header/>
                <Row>
                    <Col>
                        <Example/>
                    </Col>
                </Row>
            </Container>
        );
    }

}

