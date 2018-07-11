import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';
import '../css/Menu.css'

const Menu = () => {

    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">V.Protsan</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              home
            </NavItem>
            <NavItem eventKey={2} href="/portfolio">
              portfolio
            </NavItem>
            <NavItem eventKey={1} href="/about">
              about
            </NavItem>
            <NavItem eventKey={2} href="/contact">
              contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

};

export default Menu;
