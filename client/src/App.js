import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className='flex-column justify-center align-center min-100-vh bg-primary'>
        <Route exact path="*">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
