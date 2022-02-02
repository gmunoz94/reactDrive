import React from 'react';
import { BrowserRouter as Router, Route, Swtich } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-center align-center min-100-vh bg-primary'>
          <Switch>
            
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
