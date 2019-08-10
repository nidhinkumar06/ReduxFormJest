import React from 'react';
import { PersonalDetailForm } from '../../../src/pages/User/PersonalDetailForm';
import ReduxPersonalDetailForm from '../../../src/pages/User/PersonalDetailForm';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { mount, shallow } from '../../setup/test-setup';

const mockfn = jest.fn();

describe('<PersonalDetailForm />', () => {
	let wrapper: any;
	let store: any;

	const props: any = {
		handleSubmit: mockfn,
	};

	beforeEach(() => {
		wrapper = shallow(<PersonalDetailForm {...props} />);
	});

	it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	describe('defines user form fields', () => {
		it('renders user name field', () => {
			const userNameField = wrapper.find('[name="userName"]');

			expect(userNameField.prop('type')).toBe('text');
			expect(userNameField.prop('label')).toBe('Name *');
			expect(userNameField.prop('placeHolder')).toBe('Enter User Name');
		});

		it('renders user dob field', () => {
			const userDOBField = wrapper.find('[name="userDOB"]');

			expect(userDOBField.prop('type')).toBe('date');
			expect(userDOBField.prop('label')).toBe('DOB *');
			expect(userDOBField.prop('placeHolder')).toBe('Enter Date of Birth');
		});

		it('renders user age field', () => {
			const userAgeField = wrapper.find('[name="userAge"]');

			expect(userAgeField.prop('type')).toBe('text');
			expect(userAgeField.prop('label')).toBe('Age *');
			expect(userAgeField.prop('placeHolder')).toBe('Enter User Age');
		});

		it('renders gender field', () => {
			const genderField = wrapper.find('[name="userGender"]');

			expect(genderField.prop('type')).toBe('text');
			expect(genderField.prop('label')).toBe('Gender *');
			expect(genderField.prop('placeHolder')).toBe('Select Gender');
		});

		it('renders mobile number field', () => {
			const mobileNumberField = wrapper.find('[name="userMobileNumber"]');

			expect(mobileNumberField.prop('type')).toBe('text');
			expect(mobileNumberField.prop('label')).toBe('Mobile No *');
			expect(mobileNumberField.prop('placeHolder')).toBe('Enter Mobile Number');
		});

		it('renders address field', () => {
			const addressField = wrapper.find('[name="userAddress"]');

			expect(addressField.prop('type')).toBe('textarea');
			expect(addressField.prop('label')).toBe('Address *');
			expect(addressField.prop('placeHolder')).toBe('Enter Address');
		});

		it('renders next button', () => {
			const nextButton = wrapper.find('Button').dive();
			expect(nextButton.prop('type')).toBe('submit');
			expect(nextButton.text()).toEqual('Next <FaChevronRight />');
		});
	});

	describe('form validation', () => {
		beforeEach(() => {
			store = createStore(combineReducers({ form: formReducer }));
			wrapper = mount(
				<Provider store={store}>
					<ReduxPersonalDetailForm {...props} />
				</Provider>,
			);
		});

		describe('input#username', () => {
			let nameField: ShallowWrapper;

			beforeEach(() => {
				nameField = wrapper.find('input[name="userName"]').first();
			});

			it('shows error when name is set to blank', () => {
				nameField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('User name required');
			});
		});

		describe('input#userDOB', () => {
			let dobField: ShallowWrapper;

			beforeEach(() => {
				dobField = wrapper.find('input[name="userDOB"]').first();
			});

			it('shows error when DOB is set to blank', () => {
				dobField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('DOB required');
			});
		});

		describe('input#userAge', () => {
			let ageField: ShallowWrapper;

			beforeEach(() => {
				ageField = wrapper.find('input[name="userAge"]').first();
			});

			it('shows error when age is set to blank', () => {
				ageField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Age required');
			});
		});

		describe('input#userGender', () => {
			let genderField: ShallowWrapper;

			beforeEach(() => {
				genderField = wrapper.find('select[name="userGender"]').first();
			});

			it('shows error when gender is set to blank', () => {
				genderField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Gender required');
			});
		});

		describe('input#userMobileNumber', () => {
			let mobileField: ShallowWrapper;

			beforeEach(() => {
				mobileField = wrapper.find('input[name="userMobileNumber"]').first();
			});

			it('shows error when mobile number is set to blank', () => {
				mobileField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Mobile number required');
			});
		});

		describe('input#userAddress', () => {
			let addressField: ShallowWrapper;

			beforeEach(() => {
				addressField = wrapper.find('textarea[name="userAddress"]').first();
			});

			it('shows error when address is set to blank', () => {
				addressField.simulate('blur');
				const errorBlock = wrapper.find('.text-danger');

				expect(errorBlock).toHaveLength(1);
				expect(errorBlock.text()).toBe('Address required');
			});
		});

	});
});