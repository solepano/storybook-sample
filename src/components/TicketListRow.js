import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

const TicketListRow = ({ticket}) => {
  const statusClass = classNames({
    'label': true,
    'label-primary': ticket.status === 'new' || ticket.status === 'open',
    'label-warning': ticket.status === 'pending',
    'label-success': ticket.status === 'solved',
    'label-default': ticket.status === 'closed',
    'label-dark': ticket.status === 'hold'
  });
  let tooltip;
  switch(ticket.status){
    case 'new':
      tooltip = <Tooltip id="tooltip">The request was received and will be assigned to an agent soon.</Tooltip>;
      break;
    case 'open':
      tooltip = <Tooltip id="tooltip">An agent is working to resolve the request.</Tooltip>;
      break;
    case 'pending':
      tooltip = <Tooltip id="tooltip">The support agent needs more information about the issue.</Tooltip>;
      break;
    case 'solved':
      tooltip = <Tooltip id="tooltip">The issue has been solved. Add a comment to reopen it.</Tooltip>;
      break;
    case 'hold':
      tooltip = <Tooltip id="tooltip">A response is needed from a third-party, not the requester or the assignee.</Tooltip>;
      break;
    case 'closed':
      tooltip = <Tooltip id="tooltip">The ticket is complete and can't be reopened.</Tooltip>;
      break;
    default:
      tooltip = <Tooltip id="tooltip">{ticket.status}</Tooltip>;
      break;
  }

  return (
    <tr>
      <td>#{ticket.id}</td>
      <td className="text-truncate">
        <a href={'/tickets/'+ticket.id}>{ticket.subject}</a>
      </td>
      <td className="text-truncate hide-for-mobiles">{ticket.requester_name}</td>
      <td>
        <OverlayTrigger placement="right" overlay={tooltip}>
          <span className={statusClass}>{ticket.status}</span>
        </OverlayTrigger>
      </td>
      <td className="hide-for-mobiles">{moment(ticket.updated_at).fromNow()}</td>
    </tr>
  );
};

TicketListRow.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default TicketListRow;
