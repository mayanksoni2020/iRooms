import { LINK_COMPLETE, LINK_HOME, LINK_PROFILE, LINK_WALLET, LINK_WISH, LINK_CP, LINK_VISIT } from '../actions/types';
const inititalState = {
    linkname: " "
}
export default function (state = inititalState, action) {
    switch (action.type) {

        case LINK_HOME:
        case LINK_PROFILE:
        case LINK_COMPLETE:
        case LINK_CP:
        case LINK_VISIT:
        case LINK_WALLET:
        case LINK_WISH:
            return {
                linkname: action.payload
            }
        default:
            return {
                ...state
            }
    }
}