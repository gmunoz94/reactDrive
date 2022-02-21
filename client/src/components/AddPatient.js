import React, { useState } from 'react'
import { Form, Row, Container, Col, Button } from 'react-bootstrap';
import Axios from 'axios'
import Sidebar from './SideBar';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: ""
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    Axios.post('/api/patients', {
      firstName: formData.firstName, 
      lastName: formData.lastName, 
      dateOfBirth: formData.dateOfBirth,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode, 
      phoneNumber: formData.phoneNumber
    }).then(() => {
      setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        phoneNumber: ""
      });
      alert('Patient Added')
    })
  };
  
  return (
    <>
      <Sidebar />
      <div className="col-lg-10">
        <Container className='p-5'>
          <Row>
            <Form onSubmit={handleFormSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" name='firstName' value={formData.firstName} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" name='lastName' value={formData.lastName} onChange={handleInputChange} required />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formDOB">
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control type="date" name='dateOfBirth' value={formData.dateOfBirth} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} required />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" name='address' value={formData.address} onChange={handleInputChange} required />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" name='city' value={formData.city} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Select" name='state' value={formData.state} onChange={handleInputChange} required >
                    <option>Choose...</option>
                    <option value="Alabama">AL : Alabama</option>
                    <option value="Alaska">AK : Alaska</option>
                    <option value="Arizona">AZ : Arizona</option>
                    <option value="Arkansas">AR : Arkansas</option>
                    <option value="California">CA : California</option>
                    <option value="Colorado">CO : Colorado</option>
                    <option value="Connecticut">CT : Connecticut</option>
                    <option value="Delaware">DE : Delaware</option>
                    <option value="FLorida">FL : Florida</option>
                    <option value="Georgia">GA : Georgia</option>
                    <option value="Hawaii">HI : Hawaii</option>
                    <option value="Idaho">ID : Idaho</option>
                    <option value="Illinois">IL : Illinois</option>
                    <option value="Indiana">IN : Indiana</option>
                    <option value="Iowa">IA : Iowa</option>
                    <option value="Kansas">KS : Kansas</option>
                    <option value="Kentucky">KY : Kentucky</option>
                    <option value="Lousiana">LA : Louisiana</option>
                    <option value="Maine">ME : Maine</option>
                    <option value="Maryland">MD : Maryland</option>
                    <option value="Massachusetts">MA : Massachusetts</option>
                    <option value="Michigan">MI : Michigan</option>
                    <option value="Minnesota">MN : Minnesota</option>
                    <option value="Mississippi">MS : Mississippi</option>
                    <option value="Missouri">MO : Missouri</option>
                    <option value="Montana">MT : Montana</option>
                    <option value="Nebraska">NE : Nebraska</option>
                    <option value="Nevada">NV : Nevada</option>
                    <option value="New Hampshire">NH : New Hampshire</option>
                    <option value="New Jersey">NJ : New Jersey</option>
                    <option value="New">NM : New Mexico</option>
                    <option value="New York">NY : New York</option>
                    <option value="North Carolina">NC : North Carolina</option>
                    <option value="North Dakota">ND : North Dakota</option>
                    <option value="Ohio">OH : Ohio</option>
                    <option value="Oklahoma">OK : Oklahoma</option>
                    <option value="Oregon">OR : Oregon</option>
                    <option value="Pennsylvania">PA : Pennsylvania</option>
                    <option value="Rhode Island">RI : Rhode Island</option>
                    <option value="South Carolina">SC : South Carolina</option>
                    <option value="South Dakota">SD : South Dakota</option>
                    <option value="Tennessee">TN : Tennessee</option>
                    <option value="Texas">TX : Texas</option>
                    <option value="Utah">UT : Utah</option>
                    <option value="Vermont">VT : Vermont</option>
                    <option value="Virginia">VA : Virginia</option>
                    <option value="Washington">WA : Washington</option>
                    <option value="West Virginia">WV : West Virginia</option>
                    <option value="Wisconsin">WI : Wisconsin</option>
                    <option value="Wyoming">WY : Wyoming</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formZip">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="number" placeholder="Zip Code" name='zipCode' value={formData.zipCode} onChange={handleInputChange} required />
                </Form.Group>
              </Row>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddPatient;