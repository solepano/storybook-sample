import React, { Component } from 'react';
import './App.css';
import TicketsPage from './components/TicketsPage';

const tickets = [{id: 1234, subject:'Test ticket', requester_name: 'John Doe', status: 'new', updated_at:'2017-08-01T20:03:41.123'}];
  
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
