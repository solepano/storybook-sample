import React, { Component } from 'react';
import './App.css';
import TicketsPage from './components/TicketsPage';

const tickets = [{id: 1234, subject:'Test ticket', requester_name: 'John Doe', status: 'new', updated_at:'2017-08-01T20:03:41.123'}];
  
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
