import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const HeadBar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
        { isAuthenticated && (
            <Navbar className='bg-primary py-0 fixed-top'>
                <Navbar.Brand href='/' className='col-lg-2 me-0 px-3 bg-secondary'>GIM Drive</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavDropdown title="Patients" id='patient-dropdown'>
                            <NavDropdown.Item href='/patient'>Add Patient</NavDropdown.Item>
                            <NavDropdown.Item href='/patient/search'>Search Patient</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Orders" id='order-dropdown'>
                            <NavDropdown.Item href='/orders'>All Orders</NavDropdown.Item>
                            <NavDropdown.Item href='/orders/pending'>Pending Orders</NavDropdown.Item>
                            <NavDropdown.Item href='/orders/ready'>Ready Orders</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )}{
            !isAuthenticated && (
                <Navbar className='bg-primary py-0 fixed-top'>
                    <Navbar.Brand href='/' className='col-lg-2 me-0 px-3 bg-secondary'>GIM Drive</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <NavDropdown title="Patients" id='patient-dropdown'>
                                <NavDropdown.Item href='/'>Must Log In</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Orders" id='order-dropdown'>
                                <NavDropdown.Item href='/'>Must Log In</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
        </>
    )
}

export default HeadBar;