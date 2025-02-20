import {  createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

// step 1: create
export const AppContext = createContext();

function AppContextProvider({ children }){

    const [loading, setLoading] = useState(false);  
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(null);


    // data filling 
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (error) {
            console.trace(error);
            console.log(error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }finally{
            setLoading(false);
        }

    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };


    // step 2: provide context
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;