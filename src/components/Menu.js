import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';
import '../css/Menu.css'

const Menu = () => {

    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">V.Hasty</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li eventKey={1} >
                <Link to="/">home</Link>
            </li>
            <li eventKey={2}>
              <Link to="/portfolio">portfolio</Link>
            </li>
            <li eventKey={1} >
                <Link to="/about">about</Link>
            </li>
            <li eventKey={2}>
                <Link to="/contact">contact</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

};

export default Menu;
