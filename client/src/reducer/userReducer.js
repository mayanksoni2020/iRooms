import {USER_DATA_GET,USER_DATA_POST, GET_CART_ITEMS} from '../actions/types';
const userDetails={
    name:" ",
    email:" ",
    address:{
        city:" ",
        pincode:" ",
        state:" ",
        address:" ",
    },
    occupation:" ",
    phone:" ",
    option:" ",
    cartRooms:[],
    loading:true,
    profilecompleted:false
}

export default function(state=userDetails,action)
{
    switch(action.type)
    {
        case USER_DATA_GET:
                return {
                    ...state,
                    userDetails:action.payload,
                    loading:false
                }
          case USER_DATA_POST:{
              return {
                  ...state,
                  userDetails:action.payload,
                  loading:false,
                  profilecompleted:true
              }
            }
            case GET_CART_ITEMS:{
                return {
                    ...state,
                    cartRooms:action.payload,
                    loading:false,
                }
            }
              default:
                  return state;
                  
          }      
    }
