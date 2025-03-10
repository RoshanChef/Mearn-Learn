import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [navcolor, setColor] = useState(true);
    let value = {
        setColor, navcolor
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}