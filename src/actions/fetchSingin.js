import {
    FETCH_SINGIN,
    FETCH_SINGIN_SUCCESS,
    FETCH_SINGIN_FAILED
  } from './constants';
  
  import {fetchSinginService} from '../service/user';
  
  const Singin = useremail => {
    return dispatch  => {
      dispatch(fetchSingin());
      fetchSinginService(useremail).then(user => dispatch(fetchSinginSuccess(user)))
        .catch(error => dispatch(fetchSinginFailed(error)))
        
    }
  }
  
  const fetchSingin = () => ({
    type: FETCH_SINGIN
  });
  
  const fetchSinginSuccess = user => ({
    type: FETCH_SINGIN_SUCCESS,
    payload: {
      token: user
    },
  })
  
  const fetchSinginFailed = error => ({
    type: FETCH_SINGIN_FAILED,
    payload: { error }
  })

  export  {
    Singin
};