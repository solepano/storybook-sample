import React from 'react';
import PropTypes from 'prop-types';
import TicketListRow from './TicketListRow';

const TicketList = ({tickets}) => {
  return (
    <table className="table table-fixed">
      <thead>
        <tr>
          <th width="7%">ID</th>
          <th>Subject</th>
          <th width="15%" className="hide-for-mobiles">Requester</th>
          <th width="15%">Status</th>
          <th width="15%" className="hide-for-mobiles">Updated</th>
        </tr>
      </thead>
      <tbody>
      {tickets.map(ticket =>
        <TicketListRow key={ticket.id} ticket={ticket}/>
      )}
      </tbody>
    </table>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired
};

export default TicketList;
