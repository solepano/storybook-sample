import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import Loading from './Loading';
import Error from './Error';

const TicketsPage = ({tickets, loading, error}) => {
  return (
  	<div className="tickets-panel">
  		<h1>Your Tickets</h1>
      <Loading show={loading}>
        <Error message={error}>
          {tickets && tickets.length > 0 ?
             <TicketList tickets={tickets}/>
          :
            <div className="empty-tickets">
              <p>There are no tickets.</p>
            </div>
          }
        </Error>
      </Loading>
    </div>
  );
};

TicketsPage.propTypes = {
  tickets: PropTypes.array.isRequired
};

export default TicketsPage;
