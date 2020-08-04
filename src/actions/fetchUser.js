import {
    FETCH_USER,
    FETCH_USER_FAILED,
    FETCH_USER_SUCCESS
  } from './constants';
  import {fetchUserService} from '../service/user';
  
const User = username => {
    return dispatch  => {
      dispatch(fetchUser());
      fetchUserService(username)
        .then(user => dispatch(fetchUserSuccess(user)))
        .catch(error => dispatch(fetchUserFailed(error)))
       
    }
  }
  
  const fetchUser = () => ({
    type: FETCH_USER
  });
  
  const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    payload: {
      user
    },
  })
  
  const fetchUserFailed = error => ({
    type: FETCH_USER_FAILED,
    payload: { error }
  })

  export {
    User
  }