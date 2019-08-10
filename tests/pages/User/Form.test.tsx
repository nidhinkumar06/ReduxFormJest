import React from 'react';
import { Form } from '../../../src/pages/User/Form';
import { mount } from '../../setup/test-setup';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('<Form />', () => {
  let wrapper: any;

	const props: any = {
		isLoading: false,
		onSubmit: jest.fn(),
	};

	beforeEach(() => {
		wrapper = mount(
			<Provider store={mockStore()}>
				<Form {...props} />
			</Provider>
		);
	});

	it('defines the stepper component', () => {
    expect(wrapper.find('Stepper').first()).toBeDefined();
  });

  it('active step to be 0', () => {
    const stepper = wrapper.find('Stepper').first();

    expect(stepper.prop('activeStep')).toBe(0);
  });

  it('checks the active step title', () => {
    const step = wrapper.find('Step').first();

    expect(step.prop('title')).toBe('Personal Details');
    expect(step.prop('active')).toBeTruthy();
	});
	
	it('checks the second step title', () => {
    const step = wrapper.find('Step').at(1);

    expect(step.prop('title')).toBe('Account Detail');
    expect(step.prop('active')).toBeFalsy();
  });
});