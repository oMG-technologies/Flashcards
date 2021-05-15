import React from 'react'

const Results = ({iknow,iDontknow}) => {
    // console.log('iknow in result', iknow)
    // console.log('iDontknow in result', iDontknow)
    return (
        <div>
            {iDontknow} / {iknow}
        </div>
    )
}

export default Results
