import configureStore from 'redux-mock-store';
import { addUser } from '../../../src/redux/actions/user/add';
import { userAddResponse, userReducerData } from '../../fixtures/User/UserData';

describe('add user redux', () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
	reduxStore.clearActions();
  });

  describe('add user action', () => {
	it('should dispatch the add user action', () => {
		const expectedActions = [
			{
				payload: userAddResponse,
				type: 'ADD_USER',
			},
		];
		reduxStore.dispatch(addUser(userReducerData));

		expect(reduxStore.getActions()).toEqual(expectedActions);
	});
  });
});

