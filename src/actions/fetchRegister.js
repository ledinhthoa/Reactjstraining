import {
    FETCH_REGISTER,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILED
  } from './constants';
  
  import {fetchRegisterService} from '../service/user';
  
  const Register = userregister => {
    
    return dispatch  => {
      dispatch(fetchRegister());
      fetchRegisterService(userregister).then(user => dispatch(fetchRegisterSuccess(user)))
        .catch(error => dispatch(fetchRegisterFailed(error)))
        
    }
  }
  
  const fetchRegister = () => ({
    type: FETCH_REGISTER
  });
  
  const fetchRegisterSuccess = user => ({
    type: FETCH_REGISTER_SUCCESS,
    payload: {
      user
    },
  })
  
  const fetchRegisterFailed = error => ({
    type: FETCH_REGISTER_FAILED,
    payload: { error }
  })

  export  {
    Register
};