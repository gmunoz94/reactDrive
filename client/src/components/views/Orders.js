import React, { useState, useEffect } from 'react'
import { Table, Row, Form, Button } from 'react-bootstrap';
import Axios from 'axios';
// import AllOrderContactModal from '../modals/AllOrderContactModal';
// import AllOrderGlassesModal from '../modals/AllOrderGlassesModal';
import Sidebar from '../SideBar';


const AllOrder = () => {
    const [glOrders, setGlOrders] = useState([]);
    const [clOrders, setClOrders] = useState([]);

    const getGlOrder = () => {
      Axios.get(`/api/orders/glOrder/all`)
        .then((response) => {
          try {
            const receivedOrder = response
            console.log(receivedOrder.data)
            
          } catch (error) {
            
          }
          setGlOrders(response.data)
        })
    }
    const getClOrder = () => {
      Axios.get(`/api/orders/clOrder/all`)
        .then((response) => {
          setClOrders(response.data)
        })
    }
    
    useEffect(() => getClOrder(), []);
    useEffect(() => getGlOrder(), []);



    // const handleOrderUpdate = () => {

    // }

    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setRows({ ...rows, [name]: value });
    // };

    return(
        <>
          <Sidebar />
          <div className="col-lg-10">
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
                              <th scope='col'>Patient Name</th>
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
                                  <td>
                                    {r.orderDate}
                                  </td>
                                  <td>
                                    {r.patient_id[0].firstName} {r.patient_id[0].lastName}
                                  </td>
                                  <td>
                                    {r.frameBrand} {r.frameModel}
                                  </td>
                                  <td>
                                    {r.lensType}
                                  </td>
                                  <td>
                                    {r.location}
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
                                    <Button>Edit</Button>
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
                              <th scope='col'>Patient Name</th>
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
                                    {r.patient_id[0].firstName} {r.patient_id[0].lastName}                                    
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
                                    <Button>Edit</Button>
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
          </div>
        </>
      )
}

export default AllOrder;