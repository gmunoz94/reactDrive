import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import HeadBar from './components/HeadBar';
import Main from './components/Main';
import SearchPatient from './components/SearchPatient';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <HeadBar />
        <Route exact path="/">
          <Main />
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
      </div>
    </Router>
  );
}

export default App;
