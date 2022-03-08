import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import Axios from 'axios';
import { PatientContext } from "./Profile";

const  GlassesModal = (props) => {
  const order = props.order;
  console.log(order)

  const thisPatient = useContext(PatientContext);

  const [glOrder, setGlOrder] = useState({
    patient_id: thisPatient.patient_id,
    orderDate: "",
    frameBrand: "",
    frameModel: "",
    lensType: "",
    location: "",
    moreOrders: "",
    lab: "",
  })

  const [frames, setFrames] = useState([]);

  useEffect(() => {
    Axios.get(`/api/frames`).then((response) => {
      setFrames(response.data)
    })
  }, [])

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    Axios.post(`/api/orders/glOrder/${thisPatient.patient_id}`, {
      patient_id: thisPatient.patient_id,
      orderDate: glOrder.orderDate,
      frameBrand: glOrder.frameBrand,
      frameModel: glOrder.frameModel,
      lensType: glOrder.lensType,
      location: glOrder.location,
      moreOrders: glOrder.moreOrders,
      lab: glOrder.lab
    }).then(() => {
      // props.setState('allOrders')
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGlOrder({ ...glOrder, [name]: value });
  };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form 
              onSubmit={handleOrderSubmit}
              autoComplete="off"
            >
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formDOB">
                  <Form.Label>Order Date</Form.Label>
                  <Form.Control type="date" name='orderDate' value={glOrder.orderDate} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>Frame Brand</Form.Label>
                  <Form.Select type="text" placeholder="Frame Brand" name='frameBrand' value={glOrder.frame} onChange={handleInputChange} required>
                  <option>Choose...</option>
                  {frames.map((f) => (
                    <option value={f.frame}>{f.frame}</option>
                  ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Model Number</Form.Label>
                  <Form.Control type="text" placeholder="Model Number" name='frameModel' value={glOrder.frameModel} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Lens Type</Form.Label>
                  <Form.Control type="text" placeholder="Lens Info" name='lensType' value={glOrder.lensType} onChange={handleInputChange} required />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label>Location</Form.Label>
                  <Form.Select as={Col} name='location' value={glOrder.location} onChange={handleInputChange} required>
                    <option>Choose...</option>
                    <option value="In House">In House</option>
                    <option value="Outside Lab">Outside Lab</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>More Orders?</Form.Label>
                  <Form.Select as={Col} name='moreOrders' value={glOrder.moreOrders} onChange={handleInputChange} required >
                    <option>Choose...</option>
                    <option value="Yes, Glasses">Yes, Glasses</option>
                    <option value="Yes, Contacts">Yes, Contacts</option>
                    <option value="Yes, Family">Yes, Gamily</option>
                    <option value="No">No</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Lab</Form.Label>
                  <Form.Select name='lab' value={glOrder.lab} onChange={handleInputChange} required >
                    <option>Choose...</option>
                    <option value="In House">In House</option>
                    <option value="Walman">Walman</option>
                    <option value="ABB">ABB</option>
                    <option value="Oakley">Oakley</option>
                    <option value="Costa">Costa</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button variant="secondary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default GlassesModal;