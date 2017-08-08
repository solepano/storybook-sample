import React from 'react';
import { render } from 'enzyme';

import TicketsPage from './TicketsPage';

describe('TicketsPage Structural with Enzyme', () => {
	describe('when loading tickets', () => {
	  const wrapper = render(<TicketsPage loading tickets={[]} />);

	  it('should render spinner only', () => {
	  	//console.log(wrapper.html());
	    expect(wrapper.find('h1').text()).toEqual('Your Tickets');
	    expect(wrapper.find('.spinner').length).toEqual(1);
	  });

	});
	describe('when there is an error', () => {
	  const wrapper = render(<TicketsPage error='mock err' tickets={[]} />);

	  it('should render error alert', () => {
	  	//console.log(wrapper.html());
	    expect(wrapper.find('p').text()).toEqual('mock err');
	    expect(wrapper.find('.alert').length).toEqual(1);
	  });

	});

	describe('when there are no tickets', () => {
	  const wrapper = render(<TicketsPage tickets={[]} />);

	  it('should render error alert', () => {
	  	console.log(wrapper.html());
	    expect(wrapper.find('p').text()).toEqual('There are no tickets.');
	  });

	});
});

