import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { incrament,decrament } from '../redux/actions';

const TheBack = () => {

    const dispatch = useDispatch()

    return (
        <div className='theBack'>Back

        <p className = 'polishMeaning'>Kot</p>

        <div className = 'mainContainer_button'>
            <button className = 'btn_Iknow' onClick = {() => dispatch(incrament())}>I know</button>
            <button className = 'btn_IDonTknow' onClick = {() => dispatch(decrament())}>I don't know</button>
        </div>
        
        </div>
    )
}

export default TheBack
