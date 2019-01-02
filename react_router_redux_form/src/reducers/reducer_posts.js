import {FETCH_POSTS} from '../actions/index';
import { CREATE_POST } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };
export default function(state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return state;
        case FETCH_POSTS:
            return {...state, all:action.payload.data}
        case CREATE_POST:
            return { ...state, all: action.payload.data }
    }
}