import counterReducer from './counter'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    counterReducer: counterReducer
})

export default allReducer