import React,{useContext} from 'react'
import { MainContext } from '../context/MainContext';

import {Link} from 'react-router-dom'



const Dashboard = ({numerElemetInFlashCard,setNumerElemetInFlashCard}) => {

    // const { setNumerElemetInFlashCard } = useContext(MainContext);



    

    return (
        <div className = 'ContainerDashboard'>
            <div className = 'ContainerDashboard_header'>
                DashBoard
            </div>

            <div className = 'ContainerDashboard_main'>
                How many flash card use? <br />
                <label>Choise number of flash card</label> <br />

                <input
                    type='range'
                    min='1'
                    max='20'
                    value={numerElemetInFlashCard}
                    onChange={(e) => setNumerElemetInFlashCard(e.target.value)} 
                />
                <div>{numerElemetInFlashCard}</div>

            </div>

            <div className = 'ContainerDashboard_button'>
                {/* <button className = 'btn_toTheFlashCard' onClick={nextStep}>Start</button> */}
                <Link  to = './FlashCard' className = 'btn_toTheFlashCard'>Start</Link>
            </div>
            
           
    
          
        </div>
    )
}

export default Dashboard
