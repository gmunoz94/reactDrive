import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import Axios from 'axios';
import ProfileInfo from "./profile/ProfileInfo.js";
import GlOrderPage from "./profile/GlOrderPage.js";
import AllOrder from './profile/AllOrder';

const Profile = () => {
  const params = useParams();
  const currPt = params.patient_id;
  const { url } = useRouteMatch();

  const [state, setState] = useState('profile');

  const [thisPt, setThisPt] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/patients/${currPt}`).then((response) => {
      setThisPt(response.data[0])
    })
  }, [currPt])

  return( 
    <div className="col-lg-10 mt-5">
      <section className="container bg-dark p-4 rounded-1">
          <div className="main-body">
            <div className="row d-flex">
              {/* Side Bar */}
              <div className="col-md-2 mb-3">
                <div className="card-body bg-light rounded-3">
                  <div className="d-flex flex-column text-center p-1">
                    <h3>{thisPt.firstName} {thisPt.lastName}</h3>
                    <a href={url} className="btn btn-secondary my-2">
                      <h6 className="my-1">Profile</h6>
                    </a>                    
                    <button onClick={() => {setState('allOrders')}} className="btn btn-secondary my-2">
                      <h6 className="my-1">All Orders</h6>
                    </button>
                    <button onClick={() => {setState('pendingOrders')}} className="btn btn-secondary my-2">
                      <h6 className="my-1">Pending Orders</h6>
                    </button>
                    <button onClick={() => {setState('completeOrders')}} className="btn btn-secondary my-2">
                      <h6 className="my-1">Complete Orders</h6>
                    </button>
                    <button onClick={() => {setState('glNew')}} className="btn btn-secondary my-2">
                      <h6 className="my-1">New Glasses Order</h6>
                    </button>
                    <button onClick={() => {setState('clNew')}} className="btn btn-secondary my-2">
                      <h6 className="my-1">New Contact Order</h6>
                    </button>
                  </div>
                </div>
              </div>
              {/* Patient Info */}
              {state === 'profile' && (
                <ProfileInfo thisPatient={thisPt} setThisPt={setThisPt} currPt={currPt} />
              )}
              {state === 'allOrders' && <AllOrder currPt={currPt} setState={setState} />}
              {state === 'pendingOrders' && <GlOrderPage currPt={currPt} />}
              {state === 'completeOrders' && <GlOrderPage currPt={currPt} />}
              {state === 'glNew' && <GlOrderPage currPt={currPt} />}
              {state === 'clNew' && <GlOrderPage currPt={currPt} />}
            </div>
          </div>
      </section>
    </div>
    )
}

export default Profile;