import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import TicketsPage from '../src/components/TicketsPage';
import '../src/App.css';

const tickets = [{
	id: 1234, subject:'Can\'t make passwordless authentication work', requester_name: 'John Doe', status: 'new', updated_at:'2017-08-01T20:03:41.123'
},{
	id: 1244, subject:'Urgent Production Outage!!', requester_name: 'John Doe', status: 'pending', updated_at:'2017-07-01T20:03:41.123'
},{
	id: 1154, subject:'Very very very very very very very very very very very very very very very  long text here!', requester_name: 'John Doe', status: 'closed', updated_at:'2017-07-01T20:03:41.123'
}];

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


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