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
        <TicketsPage tickets={tickets}/>
      </div>
    );
  }
}

export default App;
