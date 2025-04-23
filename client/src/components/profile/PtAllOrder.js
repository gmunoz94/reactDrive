import React, { useState, useEffect, useContext } from 'react'
import { Table, Row, Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { PatientContext } from '../Profile'
import ContactModal from '../modals/ContactModal';
import GlassesModal from '../modals/GlassesModal';
import UpdateGlOrderModal from '../modals/UpdateGlOrderModal';


const PtAllOrder = () => {
    const thisPatient = useContext(PatientContext);
    // console.log(thisPatient)
    const [frames, setFrames] = useState([]);
    const [glOrders, setGlOrders] = useState([]);
    const [clOrders, setClOrders] = useState([]);
    
    useEffect(() => {
      Axios.get(`/api/orders/glOrder/${thisPatient.patient_id}`).then((response) => {
        setGlOrders(response.data)
      })
      Axios.get(`/api/orders/clOrder/${thisPatient.patient_id}`).then((response) => {
        setClOrders(response.data)
      })
      Axios.get(`/api/frames`).then((response) => {
        setFrames(response.data)
      })
    }, [thisPatient.patient_id])
    
    const [clModalShow, setClModalShow] =  useState({
      open: false,
      order: []
    });
    const [glModalShow, setGlModalShow] =  useState({
      open: false,
      order: []
    });
    const [updateGlOrderModalShow, setUpdateGlOrderModalShow] =  useState({
      open: false,
      order: [],
    });
    // const handleOrderUpdate = () => {

    // }

    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setRows({ ...rows, [name]: value });
    // };

    return(
        <>
          <ContactModal
            show={clModalShow.open}
            order={clModalShow.order}
            onHide={() => setClModalShow({ open: false, order: [] })}
          />
          <GlassesModal
            show={glModalShow.open}
            order={glModalShow.order}
            onHide={() => setGlModalShow({ open: false, order: [] })}
          />
          <UpdateGlOrderModal
            show={updateGlOrderModalShow.open}
            order={updateGlOrderModalShow.order}
            framemodel={frames}
            onHide={() => setUpdateGlOrderModalShow({ open: false, order: [] })}
          />
          <div id="profile">
            <div className="card mb-3">
              <div className="card-body">
                <Row>
                  <h5>Glasses Orders</h5>
                  <Form>
                    <div className='table-responsive'>
                      <Table className='table-striped table-hover'>
                        <thead>
                          <tr>
                            <th scope='col'>Order Date</th>
                            <th scope='col'>Frame</th>
                            <th scope='col'>Lens Type</th>
                            <th scope='col'>Order Location</th>
                            <th scope='col'>More Orders</th>
                            <th scope='col'>Lab</th>
                            <th scope='col'>Ordered?</th>
                            <th scope='col'>Arrived?</th>
                            <th scope='col'>Ready?</th>
                            <th scope='col'>Received?</th>
                            <th scope='col'>Dispensed?</th>
                          </tr>
                        </thead>
                        <tbody>
                          {glOrders.map((r) => (
                              <tr key={r.order_id}>
                                <td key={"orderDate"}>
                                  {r.orderDate}
                                </td>
                                <td key={"frameBrand"}>
                                  {r.frameBrand} {r.frameModel}
                                </td>
                                <td key={"lensType"}>
                                  {r.lensType}
                                </td>
                                <td key={"location"}>
                                  {r.location}
                                </td>
                                <td key={"moreOrders"}>
                                  {r.moreOrders}
                                </td>
                                <td key={"lab"}>
                                  {r.lab}
                                </td>
                                <td key={"ordered"}>
                                  {r.ordered}
                                </td>
                                <td key={"arrived"}>
                                  {r.arrived}
                                </td>
                                <td key={"ready"}>
                                  {r.ready}
                                </td>
                                <td key={"received"}>
                                  {r.received}
                                </td>
                                <td key={"dispensed"}>
                                  {r.dispensed}
                                </td>
                                <td>
                                  <Button
                                    onClick={() => {
                                      // console.log(glOrders)
                                      setUpdateGlOrderModalShow({ open: true, order: {r} });
                                  }}>Edit</Button>
                                </td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Form>
                </Row>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <Row>
                  <h5>Contacts Orders</h5>
                  <Form>
                    <div className='table-responsive'>
                      <Table className='table-striped table-hover'>
                        <thead>
                          <tr>
                            <th scope='col'>Order Date</th>
                            <th scope='col'>OD Boxes</th>
                            <th scope='col'>OD Box Type</th>
                            <th scope='col'>OS Boxes</th>
                            <th scope='col'>OS Box Type</th>
                            <th scope='col'>More Orders</th>
                            <th scope='col'>Ordered?</th>
                            <th scope='col'>Arrived?</th>
                            <th scope='col'>Ready?</th>
                            <th scope='col'>Received?</th>
                            <th scope='col'>Dispensed?</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clOrders.map((r) => (
                              <tr key={r.order_id}>
                                <td>
                                  {r.orderDate}
                                </td>
                                <td>
                                  {r.odBoxes}
                                </td>
                                <td>
                                  {r.odBoxType}
                                </td>
                                <td>
                                  {r.osBoxes}
                                </td>
                                <td>
                                  {r.osBoxType}
                                </td>
                                <td>
                                  {r.moreOrders}
                                </td>
                                <td>
                                  {r.lab}
                                </td>
                                <td>
                                  {r.ordered}
                                </td>
                                <td>
                                  {r.arrived}
                                </td>
                                <td>
                                  {r.ready}
                                </td>
                                <td>
                                  {r.received}
                                </td>
                                <td>
                                  {r.dispensed}
                                </td>
                                <td>
                                  <Button 
                                    onClick={() => {
                                      setClModalShow({ open: true, order: r });
                                    }}>Edit</Button>
                                </td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Form>
                </Row>
              </div>
            </div>
          </div>
        </>
      )
}

export default PtAllOrder;