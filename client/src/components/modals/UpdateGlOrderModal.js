import React, { useState, useContext } from 'react'
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import Axios from 'axios';
import { PatientContext } from "../Profile";

const  UpdateGlOrderModal = (props) => {
  const order = props.order.r;
  // console.log(props)
  const thisPatient = useContext(PatientContext);
  const [glOrder, setGlOrder] = useState([])

  let notUpdated = glOrder;

  const handleOrderUpdate = (event) => {
    event.preventDefault();

    Axios.put(`/api/orders/glOrder/${order.order_id}`, {
      patient_id: thisPatient.patient_id,
      orderDate: glOrder.orderDate,
      frameBrand: glOrder.frameBrand,
      frameModel: glOrder.frameModel,
      lensType: glOrder.lensType,
      location: glOrder.location,
      moreOrders: glOrder.moreOrders,
      lab: glOrder.lab
    }).then(() => {
      window.location.reload();
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGlOrder({ ...glOrder, [name]: value });
  };

  if (props.show === true) {

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
              onSubmit={handleOrderUpdate}
              onChange={handleInputChange}
              autoComplete="off"
              >
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formDOB">
                  <Form.Label>Order Date</Form.Label>
                  <Form.Control type="date" name='orderDate' value={order.orderDate} disabled required />
                </Form.Group>
                { 
                  !notUpdated.frameBrand && (
                    <Form.Group as={Col} controlId="formFrameBrand">
                      <Form.Label>Frame Brand</Form.Label>
                      <Form.Select type="text" placeholder="Frame Brand" name='frameBrand' value={order.frameBrand} onChange={handleInputChange} required>
                      <option>Choose...</option>
                      {props.framemodel.map((f) => (
                        <option value={f.frame} key={f.frame} >{f.frame}</option>
                      ))}
                      </Form.Select>
                    </Form.Group>
                  )} {
                  notUpdated.frameBrand && (
                    <Form.Group as={Col} controlId="formFrameBrand">
                      <Form.Label>Frame Brand</Form.Label>
                      <Form.Select type="text" placeholder="Frame Brand" name='frameBrand' value={glOrder.frameBrand} onChange={handleInputChange} required>
                      <option>Choose...</option>
                      {props.framemodel.map((f) => (
                        <option value={`new${f.frame}`} key={`update${f.frame}`} >{f.frame}</option>
                      ))}
                      </Form.Select>
                    </Form.Group>                   
                  )
                }
                <Form.Group as={Col} controlId="formFrameModel">
                  <Form.Label>Model Number</Form.Label>
                  { 
                    !notUpdated.frameModel && (
                      <Form.Control type="text" placeholder="Model Number" name='frameModel' value={order.frameModel} onChange={handleInputChange} required />
                  )} {
                    notUpdated.frameModel && (
                      <Form.Control type="text" placeholder="Model Number" name='frameModel' value={glOrder.frameModel} onChange={handleInputChange} required />
                    ) 
                  }
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Lens Type</Form.Label>
                  { 
                    !notUpdated.lensType && (
                      <Form.Control type="text" placeholder="Lens Info" name='lensType' value={order.lensType} onChange={handleInputChange} required />
                    )} {
                      notUpdated.lensType && (
                      <Form.Control type="text" placeholder="Lens Info" name='lensType' value={glOrder.lensType} onChange={handleInputChange} required />
                    ) 
                  }
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label>Location</Form.Label>
                  { 
                    !notUpdated.location && (
                      <Form.Select as={Col} name='location' value={order.location} onChange={handleInputChange} required>
                        <option>Choose...</option>
                        <option value="In House">In House</option>
                        <option value="Outside Lab">Outside Lab</option>
                      </Form.Select>
                    )} {
                      notUpdated.location && (
                        <Form.Select as={Col} name='location' value={glOrder.location} onChange={handleInputChange} required>
                        <option>Choose...</option>
                        <option value="In House">In House</option>
                        <option value="Outside Lab">Outside Lab</option>
                      </Form.Select>
                    ) 
                  }
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>More Orders?</Form.Label>
                  { 
                    !notUpdated.moreOrders && (
                      <Form.Select as={Col} name='moreOrders' value={order.moreOrders} onChange={handleInputChange} required >
                          <option>Choose...</option>
                          <option value="Yes, Glasses">Yes, Glasses</option>
                          <option value="Yes, Contacts">Yes, Contacts</option>
                          <option value="Yes, Family">Yes, Gamily</option>
                          <option value="No">No</option>
                        </Form.Select>
                    )} {
                      notUpdated.moreOrders && (
                        <Form.Select as={Col} name='moreOrders' value={glOrder.moreOrders} onChange={handleInputChange} required >
                          <option>Choose...</option>
                          <option value="Yes, Glasses">Yes, Glasses</option>
                          <option value="Yes, Contacts">Yes, Contacts</option>
                          <option value="Yes, Family">Yes, Gamily</option>
                          <option value="No">No</option>
                        </Form.Select>
                    ) 
                  }
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Lab</Form.Label>
                  { 
                    !notUpdated.lab && (
                      <Form.Select name='lab' value={order.lab} onChange={handleInputChange} required >
                        <option>Choose...</option>
                        <option value="In House">In House</option>
                        <option value="Walman">Walman</option>
                        <option value="ABB">ABB</option>
                        <option value="Oakley">Oakley</option>
                        <option value="Costa">Costa</option>
                      </Form.Select>
                    )} {
                      notUpdated.lab && (
                      <Form.Select name='lab' value={glOrder.lab} onChange={handleInputChange} required >
                        <option>Choose...</option>
                        <option value="In House">In House</option>
                        <option value="Walman">Walman</option>
                        <option value="ABB">ABB</option>
                        <option value="Oakley">Oakley</option>
                        <option value="Costa">Costa</option>
                      </Form.Select>
                    ) 
                  }
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
  } else {
    return (
      <div>

      </div>
    )
  }
  }
  
  export default UpdateGlOrderModal;