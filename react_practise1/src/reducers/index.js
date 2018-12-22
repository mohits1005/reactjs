import { combineReducers } from 'redux';
import ReducerCounter from './reducer_counter';

const rootReducer = combineReducers({
  count: ReducerCounter
});

export default rootReducer;
