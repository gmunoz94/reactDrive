import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Row, Col, Button } from 'react-bootstrap';
import Axios from 'axios';

const Profile = () => {
  const params = useParams();
  const currPt = params.patient_id;

  const [thisPt, setThisPt] = useState({
    patient_id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: ""
  });

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/patients/${currPt}`).then((response) => {
      setThisPt(response.data[0])
    })
  }, [currPt])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setThisPt({ ...thisPt, [name]: value });
  };

  const handlePatientUpdate = async (event) => {
    event.preventDefault();

    
    Axios.put(`http://localhost:3001/api/patients/${thisPt.patient_id}`, {
      firstName: thisPt.firstName, 
      lastName: thisPt.lastName, 
      dateOfBirth: thisPt.dateOfBirth,
      address: thisPt.address,
      city: thisPt.city,
      state: thisPt.state,
      zipCode: thisPt.zipCode, 
      phoneNumber: thisPt.phoneNumber
    }).then(() => {
      Axios.get(`http://localhost:3001/api/patients/${thisPt.patient_id}`).then((response) => {
        setThisPt(response.data[0])
      })
    })
  }

  return( 
    <section className="container bg-dark p-4 rounded-1">
        <div className="main-body">
          <div className="row d-flex">
            {/* Side Bar */}
            <div className="col-md-3 mb-3">
              <div className="card-body bg-light rounded-3">
                <div className="d-flex flex-column text-center p-1"> 
                  <h3>{thisPt.firstName} {thisPt.lastName}</h3>
                  <a href="/patient/profile/1" className="btn btn-success my-2"><h5 className="my-1">Profile</h5></a>
                  <a href="/orders/1/all" className="btn btn-secondary my-2"><h5 className="my-1">All Orders</h5></a>
                  <a href="/orders/1/pending" className="btn btn-secondary my-2"><h5 className="my-1">Pending Orders</h5></a>
                  <a href="/orders/1/complete" className="btn btn-secondary my-2"><h5 className="my-1">Complete Orders</h5></a>
                  <a href="/orders/1/glNew" className="btn btn-secondary my-2"><h5 className="my-1">New Glasses Order</h5></a>
                  <a href="/orders/1/clNew" className="btn btn-secondary my-2"><h5 className="my-1">New Contact Order</h5></a>
                </div>   
              </div>
            </div>
            {/* Patient Info */}
            <div className="col-md-9" id="profile">
              <div className="card mb-3">
                <div className="card-body">
                  <Row>
                    <Form onSubmit={handlePatientUpdate}>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="First name" name='firstName' value={thisPt.firstName} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Last name" name='lastName' value={thisPt.lastName} onChange={handleInputChange} required />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formDOB">
                          <Form.Label>Date Of Birth</Form.Label>
                          <Form.Control type="date" name='dateOfBirth' value={thisPt.dateOfBirth} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formNumber">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="number" placeholder="Phone Number" name='phoneNumber' value={thisPt.phoneNumber} onChange={handleInputChange} required />
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" name='address' value={thisPt.address} onChange={handleInputChange} required />
                      </Form.Group>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" name='city' value={thisPt.city} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formState">
                          <Form.Label>State</Form.Label>
                          <Form.Select defaultValue="Select" name='state' value={thisPt.state} onChange={handleInputChange} required >
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
                          <Form.Control type="number" placeholder="Zip Code" name='zipCode' value={thisPt.zipCode} onChange={handleInputChange} required />
                        </Form.Group>
                      </Row>
                      <Button variant="secondary" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                  </Row>
                </div>
              </div>              
            </div> 
          </div>
        </div>    
    </section>
    )
}

export default Profile;