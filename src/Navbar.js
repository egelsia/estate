import { ReactComponent as FSBOLogo } from './fsbo.svg';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light expand='md'>
        <NavbarBrand href="/" className="me-auto">
          <FSBOLogo width="25%" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='ml-auto'>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AllEstates/">Estates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SellYours" style={{
                color: '#363112',
                backgroundColor: '#FFE800',
                borderRadius: '5px',
              }}>
                Sell Yours!
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;