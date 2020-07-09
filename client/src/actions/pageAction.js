import {LINK_COMPLETE,LINK_HOME,LINK_PROFILE,LINK_WALLET,LINK_WISH, LINK_CP, LINK_VISIT} from './types';

export const setlinkHome=(name)=>{
    return{
        type:LINK_HOME,
        payload:name
    }
}
export const setlinkVisit=(name)=>{
    return {
        type:LINK_VISIT,
        payload:name
    }
}
 export const setlinkProfile=(name)=>{
    return{
        type:LINK_PROFILE,
        payload:name
    }
}
export const setlinkCp=(name)=>{
    return{
        type:LINK_CP,
        payload:name
    }
}
export const setlinkComplete=(name)=>{
    return{
        type:LINK_COMPLETE,
        payload:name
    }
}
export const setlinkWish=(name)=>{
    return{
        type:LINK_WISH,
        payload:name
    }
}
export const setlinkWallet=(name)=>{
    return{
        type:LINK_WALLET,
        payload:name
    }
}