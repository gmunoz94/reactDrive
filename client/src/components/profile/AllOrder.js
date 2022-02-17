import React, { useState, useEffect } from 'react'
import { Table, Row, Form } from 'react-bootstrap';
import Axios from 'axios';

const AllOrder = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      Axios.get(`http://localhost:3001/api/orders/glOrder/${props.currPt}`).then((response) => {
        setOrders(response.data)
      })
    }, [props.currPt])

    // const handleOrderUpdate = () => {

    // }

    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setRows({ ...rows, [name]: value });
    // };

    return(
        <div className="col-md-10" id="profile">
          <div className="card mb-3">
            <div className="card-body">
              <Row>
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
                        {orders.map((r) => (
                            <tr>
                              <td>
                                {r.orderDate}
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
      )
}

export default AllOrder;