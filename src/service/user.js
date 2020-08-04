import  axios  from  'axios';

const  fetchUserService  =  username  =>  {
    return axios.get(`http://127.0.0.1:8000/api/getUserById/${username}`)
    .then(response  =>  response.data)
    .catch(error  =>  error)
}

const  fetchSinginService  =   (useremail)  =>  {
   
    return  axios.post(`http://127.0.0.1:8000/api/login`, useremail)
        .then((res) => {
           if (res.data.success) {
            return res.data.token;
           }
          })
        .catch(error  =>  console.log(error))
}
const  fetchRegisterService  =  username  =>  {
    return axios.post(`http://127.0.0.1:8000/api/register`,username)
    .then((res) => {
        console.log(res.data)
        if (res.data) {
         return res.data;
        }
       })
     .catch(error  =>  console.log(error))
   
}

const  fetchListuserService =  id  =>  {
    axios.get(`http://127.0.0.1:8000/api/getUserById/${id}`)
            .then((res) => {
                console.log(res.data)
        
               })
            .catch(error => error)
}

export  {
    fetchSinginService,
    fetchUserService,
    fetchRegisterService,
    fetchListuserService,
};