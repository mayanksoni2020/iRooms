import {GET_ITEMS,ADD_TO_CART,ADD_ROOMS,IND_ROOMS, ROOMS_LOADING,FILTER_PRIVATE, FILTER_SHARED, FILTER_FAMILY} from  './types';
import axios from 'axios'
export const setRoomLoading=()=>{
    return{
        type:ROOMS_LOADING
    }
}
export const getItems=()=> dispatch =>{
   dispatch(setRoomLoading)
   axios.get('/api/irooms')
   .then((res)=>dispatch({
       type:GET_ITEMS,
       payload:res.data
   }))
};
export const getIndividualRoom=(id)=>dispatch=>{
    dispatch(setRoomLoading)
    console.log(id);
    axios.get(`/api/irooms/${id}`)
    .then((res)=>dispatch({
        type:IND_ROOMS,
        payload:res.data
    }))
}
export const addToCart=(id)=>{
return{
    type:ADD_TO_CART,
    payload:id
};
};
export const addRooms=(item)=>dispatch=>{
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'boundary': '278347931602192581365043'
        }
      };
    
    axios.post('/api/irooms',item,config)
    
    .then(res=>dispatch({
        type:ADD_ROOMS,
        payload:res.data
    })).catch((e)=>{
        console.log(e.message)
    })
}


export const filterPrivate=()=>dispatch=>{
    dispatch(setRoomLoading)
    axios.get('/api/irooms/private')
    .then((res)=>dispatch({
        type:FILTER_PRIVATE,
        payload:res.data
    }))
}
export const filterShared=()=>dispatch=>{
    dispatch(setRoomLoading)
    axios.get('/api/irooms/shared')
    .then((res)=>dispatch({
        type:FILTER_SHARED,
        payload:res.data
    }))
}
export const filterFamily=()=>dispatch=>{
    dispatch(setRoomLoading)
    axios.get('/api/irooms/family')
    .then((res)=>dispatch({
        type:FILTER_FAMILY,
        payload:res.data
    }))
}