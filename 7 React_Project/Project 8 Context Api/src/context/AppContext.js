import { Children, createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

// step 1: create
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);



    // data filling 
    async function fetchBlogData(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            // fetch the data
            const response = await fetch(url);
            const data = await response.json();

            //check data 
            console.log(data);

            // set the states
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (e) {
            console.log('Fetching data failed');

        }

        setLoading(false);
    }

    function handlePageChange(page) {
        // setPage(page);
        fetchBlogData(page);
    }

    let value = [
        loading, setLoading,
        posts, setPosts,
        page, setPage,
        totalPages, setTotalPages,
        handlePageChange, fetchBlogData
    ]

    // step 2: provide context
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;