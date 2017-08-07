import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import TicketsPage from '../src/components/TicketsPage';

const tickets = [{
	id: 1234, subject:'Can\'t make passwordless authentication work', requester_name: 'John Doe', status: 'new', updated_at:'2017-08-01T20:03:41.123'
},{
	id: 1244, subject:'Urgent Production Outage!!', requester_name: 'John Doe', status: 'pending', updated_at:'2017-07-01T20:03:41.123'
},{
	id: 1154, subject:'Can I extend the trial period?', requester_name: 'John Doe', status: 'closed', updated_at:'2017-07-01T20:03:41.123'
}
];

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('TicketsPage', module)
	.add('loading tickets', () =>
	  <TicketsPage
	    tickets={[]}
	    loading
	  />
	).add('with error loading tickets', () =>
	  <TicketsPage
	    tickets={[]}
	    error='There was an error retrieving your tickets'
	  />
	)
	.add('with no tickets', () =>
	  <TicketsPage
	    tickets={[]}
	  />
	)
	.add('with several tickets', () =>
	  <TicketsPage
	    tickets={tickets}
	  />
	);
