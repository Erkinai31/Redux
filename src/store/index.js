import {applyMiddleware, combineReducers, createStore} from 'redux'
import { CountReducer } from './CountReducer'
import { emplReducer } from './empReduce'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    count: CountReducer,
    empl:emplReducer
})

export const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )