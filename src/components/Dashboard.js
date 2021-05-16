import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className = 'ContainerDashboard'>
            <div className = 'ContainerDashboard_header'>
                DashBoard
            </div>

            <div className = 'ContainerDashboard_button'>
                <Link to='./FlashCard' className = 'btn_toTheFlashCard'> To the Flash Card</Link>
            </div>

        </div>
    )
}

export default Dashboard
