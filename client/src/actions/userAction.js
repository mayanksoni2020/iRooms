import axios from 'axios';
import {USER_DATA_GET,USER_DATA_POST} from './types';
 
export const user_data_get=()=>dispatch=>{
axios.get('/api/userprofile')
.then((res)=>dispatch({
    type:USER_DATA_GET,
    payload:res.data
}))
};

export const user_data_post=(user)=>dispatch=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    axios.post('/api/userprofile',user,config)
    .then((res)=>dispatch({
        type:USER_DATA_POST,
        payload:res.data
    }))
}