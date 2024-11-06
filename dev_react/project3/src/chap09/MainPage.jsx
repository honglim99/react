import React, { useState } from 'react'
import WarningBanner from './WarningBanner'

function MainPage() {
    const [showWarning, setShowWarning] = useState(false)
    
    const handleToggleClick = ()=>{
        setShowWarning(prevShowWaring => !prevShowWaring)
    }

    return (
    <div>
        <WarningBanner warning={showWarning}/>
        <button onClick={handleToggleClick}>
            { showWarning ? '감추기' : '보이기' }
        </button>
    </div>
    )
}

export default MainPage