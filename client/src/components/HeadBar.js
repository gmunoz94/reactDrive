import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const HeadBar = () => {
    return (
        <>
        <Navbar className='mb-5 bg-primary'>
            <Container>
                <Navbar.Brand href='/'>IMAGine Drive</Navbar.Brand>
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
            </Container>
        </Navbar>
        </>
    )
}

export default HeadBar;