import React, {Component} from 'react';
import {Tooltip} from 'reactstrap';


import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Header extends Component {

    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tutorialList">Tuturials</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tooltip">Tooltip</NavLink>
                    </NavItem>

                </Nav>
            </div>
        );
    }

}

