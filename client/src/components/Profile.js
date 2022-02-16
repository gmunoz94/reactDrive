import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import ProfileInfo from "./profile/ProfileInfo.js";
import GlOrderPage from "./profile/GlOrderPage.js";

const Profile = () => {
  const params = useParams();
  const currPt = params.patient_id;

  const [state, setState] = useState('profile');

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



  return( 
    <div className="col-lg-9 mt-5">
      <section className="container bg-dark p-4 rounded-1">
          <div className="main-body">
            <div className="row d-flex">
              {/* Side Bar */}
              <div className="col-md-3 mb-3">
                <div className="card-body bg-light rounded-3">
                  <div className="d-flex flex-column text-center p-1">
                    <h3>{thisPt.firstName} {thisPt.lastName}</h3>
                    <button onClick={() => {setState('profile')}} className="btn btn-secondary my-2">
                      <h5 className="my-1">Profile</h5>
                    </button>                    
                    <button onClick={() => {setState('allOrders')}} className="btn btn-secondary my-2">
                      <h5 className="my-1">All Orders</h5>
                    </button>
                    <button onClick={() => {setState('pendingOrders')}} className="btn btn-secondary my-2">
                      <h5 className="my-1">Pending Orders</h5>
                    </button>
                    <button onClick={() => {setState('completeOrders')}} className="btn btn-secondary my-2">
                      <h5 className="my-1">Complete Orders</h5>
                    </button>
                    <button onClick={() => {setState('glNew')}} className="btn btn-secondary my-2">
                      <h5 className="my-1">New Glasses Order</h5>
                    </button>
                    <button onClick={() => {setState('clNew')}} className="btn btn-secondary my-2">
                      <h5 className="my-1">New Contact Order</h5>
                    </button>
                  </div>
                </div>
              </div>
              {/* Patient Info */}
              {state === 'profile' && (
                <ProfileInfo thisPatient={thisPt} setThisPt={setThisPt} currPt={currPt} />
              )}
              {state === 'allOrders' && <GlOrderPage />}
              {state === 'pendingOrders' && <GlOrderPage />}
              {state === 'completeOrders' && <GlOrderPage />}
              {state === 'glNew' && <GlOrderPage />}
              {state === 'clNew' && <GlOrderPage />}
            </div>
          </div>
      </section>
    </div>
    )
}

export default Profile;