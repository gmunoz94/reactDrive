import React, { useState, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import Axios from 'axios';
import { PatientContext } from "../Profile";

const ClOrderPage = () => {
    const thisPatient = useContext(PatientContext);

    const [clOrder, setClOrder] = useState({
        patient_id: thisPatient.patient_id,
        orderDate: "",
        odBoxes: "",
        odBoxType: "",
        osBoxes: "",
        osBoxType: "",
        moreOrders: "",
    })

    const handleOrderSubmit = (event) => {
      event.preventDefault();

      Axios.post(`/api/orders/clOrder/${thisPatient.patient_id}`, {
        patient_id: clOrder.patient_id,
        orderDate: clOrder.orderDate,
        odBoxes: clOrder.odBoxes,
        odBoxType: clOrder.odBoxType,
        osBoxes: clOrder.osBoxes,
        osBoxType: clOrder.osBoxType,
        moreOrders: clOrder.moreOrders,
      }).then(() => {
        // props.setState('allOrders')
      })
    }

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setClOrder({ ...clOrder, [name]: value });
    };

    return(
        <div id="profile">
          <div className="card mb-3">
            <div className="card-body">
              <Row>
                <Form 
                  onSubmit={handleOrderSubmit}
                  autoComplete="off"
                >
                  <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formDOB">
                      <Form.Label>Order Date</Form.Label>
                      <Form.Control type="date" name='orderDate' value={clOrder.orderDate} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="odBoxes">
                      <Form.Label>Boxes OD</Form.Label>
                      <Form.Control type="number" placeholder="Number of Boxes" name='odBoxes' value={clOrder.odBoxes} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="odBoxType">
                      <Form.Label>OD Box Type</Form.Label>
                      <Form.Select as={Col} name='odBoxType' value={clOrder.odBoxType} onChange={handleInputChange} required>
                        <option>Choose...</option>
                        <option value="6-pack">6-pack</option>
                        <option value="12-pack">12-pack</option>
                        <option value="24-pack">24-pack</option>
                        <option value="30-pack">30-pack</option>
                        <option value="90-pack">90-pack</option>
                        <option value="1-trial">5-trial</option>
                        <option value="5-trials">5-trials</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="osBoxes">
                      <Form.Label>Boxes OS</Form.Label>
                      <Form.Control type="number" placeholder="Number of Boxes" name='osBoxes' value={clOrder.osBoxes} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="osBoxType">
                      <Form.Label>OD Box Type</Form.Label>
                      <Form.Select as={Col} name='osBoxType' value={clOrder.osBoxType} onChange={handleInputChange} required>
                        <option>Choose...</option>
                        <option value="6-pack">6-pack</option>
                        <option value="12-pack">12-pack</option>
                        <option value="24-pack">24-pack</option>
                        <option value="30-pack">30-pack</option>
                        <option value="90-pack">90-pack</option>
                        <option value="1-trial">5-trial</option>
                        <option value="5-trials">5-trials</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>More Orders?</Form.Label>
                      <Form.Select as={Col} name='moreOrders' value={clOrder.moreOrders} onChange={handleInputChange} required >
                        <option>Choose...</option>
                        <option value="Yes, Glasses">Yes, Glasses</option>
                        <option value="Yes, Contacts">Yes, Contacts</option>
                        <option value="Yes, Family">Yes, Gamily</option>
                        <option value="No">No</option>
                      </Form.Select>
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
      )
}

export default ClOrderPage;