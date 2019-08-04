import { ADD_USER } from '../actionTypes/userTypes';
import { UserState, UserTypes } from '../actions/user/add.d';

const INITIAL_STATE: UserState = {
  data: [],
};

function userReducer(state = INITIAL_STATE, action: UserTypes): UserState {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    }
    default:
      return state;
  }
}

export default userReducer;