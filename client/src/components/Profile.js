import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import ProfileInfo from "./profile/ProfileInfo.js";
import GlOrderPage from "./profile/GlOrderPage.js";
import AllOrder from './profile/AllOrder';
import ClOrderPage from "./profile/ClOrderPage.js";
import PatientSidebar from './profile/PatientSideBar'

export const PatientContext = React.createContext();
export const PatientUpdateContext = React.createContext();

const Profile = () => {
  const params = useParams();
  const currPt = params.patient_id;

  const [state, setState] = useState('profile');

  const [thisPt, setThisPt] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setThisPt({ ...thisPt, [name]: value });
  };

  useEffect(() => {
    Axios.get(`/api/patients/${currPt}`).then((response) => {
      setThisPt(response.data[0])
    })
  }, [currPt])

  const updateComponent = (newState) => {
    setState(newState)
  }

  return( 
    <PatientContext.Provider value={thisPt}>
      <PatientUpdateContext.Provider value={handleInputChange}>
        <PatientSidebar updateComponent={updateComponent} />
        <div className="col-lg-10 mt-5 px-5">
          <section className="container-fluid bg-dark p-4 rounded-1">
              <div className="main-body">
                <div className="row d-flex">
                  {/* Patient Info */}
                  {state === 'profile' && (
                    <ProfileInfo />
                  )}
                  {state === 'allOrders' && <AllOrder />}
                  {state === 'pendingOrders' && <GlOrderPage />}
                  {state === 'completeOrders' && <GlOrderPage />}
                  {state === 'glNew' && <GlOrderPage />}
                  {state === 'clNew' && <ClOrderPage />}
                </div>
              </div>
          </section>
        </div>
      </PatientUpdateContext.Provider>
    </PatientContext.Provider>
    )
}

export default Profile;