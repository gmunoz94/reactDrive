import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import HeadBar from './components/HeadBar';
import Home from './components/Home';
import SearchPatient from './components/SearchPatient';
import Profile from './components/Profile';
import Sidebar from './components/SideBar';
import { Row } from 'react-bootstrap';
import './styles/bootstrap.css'

function App() {
  return (
    <Router>
      <main>
        <HeadBar />
        <Row className='mx-0 mainContent vh-100'>
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/patient">
            <AddPatient />
          </Route>
          <Route exact path="/patient/search">
            <SearchPatient />
          </Route>
          <Route exact path="/patient/profile/:patient_id">
            <Profile />
          </Route>
        </Row>
      </main>
    </Router>
  );
}

export default App;
