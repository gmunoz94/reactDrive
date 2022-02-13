import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import HeadBar from './components/HeadBar';
import Main from './components/Main';

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
      </div>
    </Router>
  );
}

export default App;
