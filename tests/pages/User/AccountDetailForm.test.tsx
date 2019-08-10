import React from 'react';
import { AccountDetailForm } from '../../../src/pages/User/AccountDetailForm';
import ReduxAccountDetailForm from '../../../src/pages/User/AccountDetailForm';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { mount, shallow } from '../../setup/test-setup';

const mockfn = jest.fn();

describe('<AccountDetailForm />', () => {
	let wrapper: any;
	let store: any;

	const props: any = {
		handleSubmit: mockfn,
	};

	beforeEach(() => {
		wrapper = shallow(<AccountDetailForm {...props} />);
	});

	it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	describe('defines account detail form fields', () => {
		it('renders account number field', () => {
			const userAccountNumberField = wrapper.find('[name="useraccountNumber"]');

			expect(userAccountNumberField.prop('type')).toBe('text');
			expect(userAccountNumberField.prop('label')).toBe('Account Number *');
			expect(userAccountNumberField.prop('placeHolder')).toBe('Enter Account Number');
		});

		it('renders bank name field', () => {
			const bankNameField = wrapper.find('[name="userBankName"]');

			expect(bankNameField.prop('type')).toBe('text');
			expect(bankNameField.prop('label')).toBe('Bank Name *');
			expect(bankNameField.prop('placeHolder')).toBe('Enter Bank Name');
		});

		it('renders bank address field', () => {
			const bankAddressField = wrapper.find('[name="userbankAddress"]');

			expect(bankAddressField.prop('type')).toBe('textarea');
			expect(bankAddressField.prop('label')).toBe('Bank Address *');
			expect(bankAddressField.prop('placeHolder')).toBe('Enter Bank Address');
		});

		it('renders previous button', () => {
			const previousButton = wrapper
				.find('Button')
				.at(0)
				.dive();

			expect(previousButton.text()).toEqual('<FaChevronLeft />  Previous');
		});

		it('renders save button', () => {
			const button = wrapper.find('Button').at(1).dive();
			const saveButton = button.find('span').text();

			expect(button.prop('type')).toBe('submit');
			expect(saveButton).toEqual('Save');
		});
	});

	describe('form validation', () => {
		beforeEach(() => {
			store = createStore(combineReducers({ form: formReducer }));
			wrapper = mount(
				<Provider store={store}>
					<ReduxAccountDetailForm {...props} />
				</Provider>,
			);
		});

		describe('input#account number', () => {
			let accountNumberField: ShallowWrapper;

			beforeEach(() => {
				accountNumberField = wrapper.find('input[name="useraccountNumber"]').first();
			});

			it('shows error when account number is set to blank', () => {
				accountNumberField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Account number required');
			});
		});

		describe('input#bank name', () => {
			let bankNameField: ShallowWrapper;

			beforeEach(() => {
				bankNameField = wrapper.find('input[name="userBankName"]').first();
			});

			it('shows error when bank name is set to blank', () => {
				bankNameField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Bank name required');
			});
		});

		describe('input#bank address', () => {
			let addressField: ShallowWrapper;

			beforeEach(() => {
				addressField = wrapper.find('textarea[name="userbankAddress"]').first();
			});

			it('shows error when bank address is set to blank', () => {
				addressField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Bank address required');
			});
		});

	});
});