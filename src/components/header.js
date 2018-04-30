import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="text-primary font-weight-bold" href="/">
            Spot
          </NavbarBrand>
          <Nav className="ml-2" navbar>
            <NavItem>
              <NavLink href="">Vade</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Scan</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
