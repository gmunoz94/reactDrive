import React from 'react'
import { Container, InputGroup } from 'react-bootstrap';
import { Form, Row } from 'react-bootstrap';

const Splash = () => (
  <div>
    <Container>
      <Row>
        <Form>
          <InputGroup>
            <InputGroup.Text>First and Last Name</InputGroup.Text>
              <Form.Control type="text" placeholder="First Name"/>
              <Form.Control type="text" placeholder="Last Name"/>
          </InputGroup>
          <Form.Group className="mb-3" controlId="formDOB">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="date" placeholder="Date of Birth"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number"/>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  </div>
)

export default Splash;