import {
    FETCH_LISTUSER,
    FETCH_LISTUSER_SUCCESS,
    FETCH_LISTUSER_FAILED
  } from '../actions/constants';
  
  const initialState = {
    error: null,
    user: null,
  }
  
  export const ListuserReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LISTUSER:
        return {  
          user: null,
          error: null,
        };
      case FETCH_LISTUSER_SUCCESS: {
        return {
          user: action.payload.user,
          error: null,
        };
      }
      case FETCH_LISTUSER_FAILED: {
        return {
          user: null,
          error: action.payload.error
        }
      }
      default:
        return state;
    }
  }