import React, { createContext, useState } from 'react'

export const BulbContext = createContext();

function BulbProvider({ children }) {
    const [light, setLight] = useState(false);

    return (<BulbContext.Provider value={{ light: light, setLight: setLight }}>
        {children}
    </BulbContext.Provider>)
}

export default BulbProvider

