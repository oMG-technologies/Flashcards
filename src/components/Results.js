import React from 'react'
import { Link } from 'react-router-dom';

const Results = ({iknow,iDontknow}) => {
    // console.log('iknow in result', iknow)
    // console.log('iDontknow in result', iDontknow)
    return (
        <div>

            Results
            {iDontknow} / {iknow}

              <Link to='.'> Back home</Link>
            <Link to='./FlashCard'> The the FlashCard</Link>
        </div>
    )
}

export default Results
