import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
            {/* Allow children route */}
            <Outlet />
        </div>
    )
}

export default MainHeader
