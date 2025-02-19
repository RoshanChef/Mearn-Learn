import { createContext, useState } from "react";

export const AppContext = createContext();


export function AppProvider({ children }) {

    const [cnt, setCnt] = useState(0);
    let val = 9;
    let value = {
        cnt, setCnt
        , val
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
