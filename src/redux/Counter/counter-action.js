import * as actionTypes from './counter-types'

export const addScores = (score) => {
    return{
        type: actionTypes.ADD_SCORES,
        payload: score
    }
}

export const substractScores = (score) => {
    return{
        type:actionTypes.SUBTRACT_SCORES,
        payload:score
    }
}