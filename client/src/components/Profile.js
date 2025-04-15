import React, { useEffect, useState } from "react";
import { useParams, BrowserRouter as Router, Route, useRouteMatch } from "react-router-dom";
import Axios from 'axios';
import ProfileInfo from "./profile/ProfileInfo.js";
import GlOrderPage from "./profile/PtGlOrderPage.js";
import PtAllOrder from './profile/PtAllOrder.js';
import ClOrderPage from "./profile/PtClOrderPage.js";
import PatientSidebar from './profile/PatientSideBar'
import PendingOrder from "./profile/PtPendingOrder.js";
import CompleteOrder from "./profile/PtCompleteOrder.js";

export const PatientContext = React.createContext();
export const PatientUpdateContext = React.createContext();

const Profile = () => {
  const { url } = useRouteMatch();

  const params = useParams();
  const currPt = params.patient_id;

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

  return( 
    <PatientContext.Provider value={thisPt}>
      <PatientUpdateContext.Provider value={handleInputChange}>
        <PatientSidebar />
        <div className="col-lg-10 mt-2 px-2">
          <section className="container-fluid bg-dark p-4 rounded-1">
              <div className="main-body">
                  <Router>
                    {/* Patient Info */}
                    <Route exact path={`${url}`}>
                      <ProfileInfo />
                    </Route>
                    <Route path={`${url}/allOrder`}>
                      <PtAllOrder />
                    </Route>
                    <Route path={`${url}/pendingOrder`}>
                      <PendingOrder />
                    </Route>
                    <Route path={`${url}/completeOrder`}>
                      <CompleteOrder />
                    </Route>
                    <Route path={`${url}/glNew`}>
                      <GlOrderPage />
                    </Route>
                    <Route path={`${url}/clNew`}>
                      <ClOrderPage />
                    </Route>
                  </Router>
              </div>
          </section>
        </div>
      </PatientUpdateContext.Provider>
    </PatientContext.Provider>
    )
}

export default Profile;