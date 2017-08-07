import React, { Component } from 'react';
import './App.css';
import TicketsPage from './components/TicketsPage';

const tickets = [{
  id: 1234, subject:'Unable to login', requester_name: 'John Doe', status: 'new', updated_at:'2017-08-01T20:03:41.123'
},{
  id: 1133, subject:'Need help with linked accounts', requester_name: 'John Doe', status: 'closed', updated_at:'2016-10-01T20:03:41.123'
}];
  
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/react-components/1.0.2/react-components.css" />
        <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
        <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />
        <TicketsPage tickets={tickets}/>
      </div>
    );
  }
}

export default App;
