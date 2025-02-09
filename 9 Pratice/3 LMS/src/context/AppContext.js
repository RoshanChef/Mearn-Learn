import { createContext } from "react"

export const AppContext = createContext();
export function AppContextProvider({ children }) {
    
    let value = {

    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

