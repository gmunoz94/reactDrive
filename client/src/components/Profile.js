import React, { useEffect, useState } from "react";
import { useParams, BrowserRouter as Router, Route, useRouteMatch } from "react-router-dom";
import Axios from 'axios';
import ProfileInfo from "./profile/ProfileInfo.js";
import GlOrderPage from "./profile/GlOrderPage.js";
import AllOrder from './profile/AllOrder';
import ClOrderPage from "./profile/ClOrderPage.js";
import PatientSidebar from './profile/PatientSideBar'

export const PatientContext = React.createContext();
export const PatientUpdateContext = React.createContext();

const Profile = () => {
  const { path, url } = useRouteMatch();

	console.log('path', path);
	console.log('url', url);
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
        <div className="col-lg-10 mt-5 px-5">
          <section className="container-fluid bg-dark p-4 rounded-1">
              <div className="main-body">
                  <Router>
                    {/* Patient Info */}
                    <Route exact path={`${url}`}>
                      <ProfileInfo />
                    </Route>
                    <Route path={`${url}/allOrder`}>
                      <AllOrder />
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