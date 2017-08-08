import React from 'react';
import { shallow } from 'enzyme';

import TicketsPage from './TicketsPage';

//const setup = props => shallow(<FreeAccountAlert {...props} />);

describe('TicketsPage Structural with Enzyme', () => {
	describe('when loading tickets', () => {
	  const wrapper = shallow(<TicketsPage loading tickets={[]} />);

	  it('should render spinner only', () => {
	  	console.log(wrapper.html());
	    expect(wrapper.find('h1').text()).toEqual('Your Tickets');
	    wrapper.find('div.spinner').first().debug();
	    expect(wrapper.children().find('div').length).toBe(1);
	    console.log(wrapper.children(1).html());
	    expect(wrapper.find('div.spinner').length).toBe(1);
	  });

	});
});

