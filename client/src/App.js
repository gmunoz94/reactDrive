import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPatient from './components/views/AddPatient';
import HeadBar from './components/HeadBar';
import Home from './components/views/Home';
import SearchPatient from './components/views/SearchPatient';
import Profile from './components/Profile';
import { Row } from 'react-bootstrap';
import './styles/bootstrap.css'
import AllOrder from './components/views/Orders';

function App() {

  return (
    <Router>
      <main>
        <HeadBar />
        <Row className='mx-0 mainContent vh-100'>
          {/* <Sidebar /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/orders">
              <AllOrder />
            </Route>
            <Route exact path="/patient">
              <AddPatient />
            </Route>
            <Route exact path="/patient/search">
              <SearchPatient />
            </Route>
            <Route path="/patient/profile/:patient_id">
              <Profile />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Row>
      </main>
    </Router>
  );
}

export default App;
