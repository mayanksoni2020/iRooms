import {GET_ITEMS,ADD_TO_CART, ADD_ROOMS,ROOMS_LOADING,IND_ROOMS, FILTER_PRIVATE, FILTER_FAMILY, FILTER_SHARED} from '../actions/types';
const initalState={
    rooms:[],
    inrooms:[],
    loading:true
}
export default function(state=initalState,action){
    switch(action.type)
    {
        case GET_ITEMS:
                  return{
                     ...state,
                     rooms:action.payload,
                     loading:false
                     
                  }
         case ADD_TO_CART:
                    return{
                        ...state,
                        rooms:state.rooms.filter(room=>room.id !==action.payload)
                    };
        case ADD_ROOMS:
                    return{
                        ...state,
                        rooms:[action.payload, ...state.rooms]
                    }
        case IND_ROOMS:{
            return {
                ...state.inrooms,
                inrooms:[action.payload,...state.inrooms],
                loading:false
            }
        }            
        case ROOMS_LOADING:
                    return{
                        ...state,
                        loading:true
                    }
         case FILTER_PRIVATE:{
                            return{
                                rooms:action.payload,
                                loading:false
                            }
                    }
        case FILTER_FAMILY:{
                        return{
                                rooms:action.payload,
                                loading:false
                        }
                        }  
         case FILTER_SHARED:{
                            return{
                                rooms:action.payload,
                                loading:false
                            }
                        }                          
        default:
            return state ;         
    }
}