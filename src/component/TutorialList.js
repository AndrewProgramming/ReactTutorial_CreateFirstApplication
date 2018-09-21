import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import { Table } from 'reactstrap';
import Header from "./Header";


export default class TutorialList extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tutorial Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Java</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Python</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Groovy</td>
          </tr>
        </tbody>
      </Table>
            </Container>
        );
    }
}