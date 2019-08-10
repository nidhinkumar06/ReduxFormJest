import React from 'react';
import { User } from '../../../src/pages/User/User';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../setup/test-setup';


const mockStore = configureStore();
// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe('<User />', () => {
    let wrapper: any;

    const props: any = {
      handleSubmit: jest.fn(),
    };

    it('defines the component', () => {
			wrapper = mount(
				<Provider store={mockStore()}>
					<User {...props} dispatch={mockDispatchfn} />
				</Provider>
			);
			expect(wrapper).toBeDefined();
		});
		
		it('renders form component', () => {
			expect(wrapper.find('[form="user"]').first()).toHaveLength(1);
		});
});
