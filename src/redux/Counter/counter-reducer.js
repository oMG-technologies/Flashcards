import * as actionTypes from './counter-types'

const INITIAL_STATE = {
  // product: [] //{id, title, decription}
    count: 0
}

const counterReducer = (state = INITIAL_STATE , action) => {
    switch(action.types){
        case actionTypes.ADD_SCORES:{
            return {

            }
        }
        case actionTypes.SUBTRACT_SCORES:{
            return {

            }
        }
        default: 
            return state
    }
}

export default counterReducer