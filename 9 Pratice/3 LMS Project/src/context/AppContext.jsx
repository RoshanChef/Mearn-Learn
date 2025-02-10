import { createContext, useState } from "react"
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export function AppContextProvider({ children }) {
    const currency = import.meta.env.VITE_CURRENCY;
    const [allcouses, setAllcouses] = useState([]);
    const [isEducator, setEducator] = useState(false);


    const navigate = useNavigate();

    async function fetchAllCourses() {
        setAllcouses(dummyCourses);
    }

    function averageRateCalc(course) {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let total = 0;
        course.courseRatings.forEach((rate) => {
            total += rate.rating;
        })
        return total / course.courseRatings.length;
    }

    let value = {
        currency, allcouses, fetchAllCourses, navigate, isEducator, setEducator, averageRateCalc
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

