import {
    FETCH_REGISTER,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILED
  } from '../actions/constants';
  
  const initialState = {
    error: null,
    user: null,
  }
  
  export const registerReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REGISTER:
        return {
          user: null,
          error: null,
        };
      case FETCH_REGISTER_SUCCESS: {
        return {
          user: action.payload.user,
          error: null,
        };
      }
      case FETCH_REGISTER_FAILED: {
        return {
          user: null,
          error: action.payload.error
        }
      }
      default:
        return state;
    }
  }