import {
    FETCH_SINGIN,
    FETCH_SINGIN_SUCCESS,
    FETCH_SINGIN_FAILED
  } from '../actions/constants';
  
  const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null
  }
  
  export const signInReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SINGIN:
        return {
          loading: true,
          user: null,
          error: null,
        };
      case FETCH_SINGIN_SUCCESS: {
        return {
          loading: false,
          user: null,
          error: null,
          token: action.payload.token
        };
      }
      case FETCH_SINGIN_FAILED: {
        return {
          loading: false,
          user: null,
          error: action.payload.error
        }
      }
      default:
        return state;
    }
  }