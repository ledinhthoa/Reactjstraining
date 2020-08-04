import {
    FETCH_LISTUSER,
    FETCH_LISTUSER_SUCCESS,
    FETCH_LISTUSER_FAILED
  } from './constants';
  import  axios  from  'axios';
//   import {fetchListuserService} from '../service/user';
  
  const Listuser = userid => {
    return dispatch  => {
      dispatch(fetchlistuser());
      axios.get(`http://127.0.0.1:8000/api/getUserById/${userid}`)
      .then(user => dispatch(fetchListuserSuccess(user.data)))
        .catch(error => dispatch(fetchListuserFailed(error)))
        
    }
  }
  
  const fetchlistuser = () => ({
    type: FETCH_LISTUSER
  });
  
  const fetchListuserSuccess = user => ({
    type: FETCH_LISTUSER_SUCCESS,
    payload: {
      user
    },
  })
  
  const fetchListuserFailed = error => ({
    type: FETCH_LISTUSER_FAILED,
    payload: { error }
  })

  export  {
    Listuser
};