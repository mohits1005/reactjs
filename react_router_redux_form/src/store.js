import rootReducer from './reducers/index';
import { createStore } from 'redux'

export default function configureStore() {
    let store = createStore(
        rootReducer
    )
    return store
}