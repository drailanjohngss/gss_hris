import {
  LOGIN_START,
  LOADING_START,
  LOGOUT,
  LOGIN_ERROR
} from '../actions/types';
import axios from 'axios';
import history from '../history';

export const loginStart = () => async dispatch => {
  history.push('/login');
  dispatch({ type: LOGOUT });
};
