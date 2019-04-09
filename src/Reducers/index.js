import {
  LOGIN_START,
  LOADING_START,
  LOGOUT,
  LOGIN_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  status: '',
  loading: false,
  error: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, status: action.payload };
    case LOADING_START:
      return { ...state, loading: action.payload };
    case LOGOUT:
      return { ...state, status: false };
    case LOGIN_ERROR:
      return { ...state, error: 'Login Failed', loading: false };
    default:
      return state;
  }
}
