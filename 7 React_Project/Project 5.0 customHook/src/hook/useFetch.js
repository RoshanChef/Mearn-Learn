import { useEffect, useState } from "react";

export function usePost() {
    const [post, setPost] = useState({});

    async function getPost() {
        const reponse = await fetch('url');
        const data = await reponse.json();
        setPost(data);
    }

    useEffect(() => {
        getPost();
    }, [])
    return post.title;
}


export function useFetch(url) {
    const [finalData, setFinalData] = useState({});

    async function getDetails() {
        const reponse = await fetch(url);
        const data = await reponse.json();
        setFinalData(data);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return {
        finalData
    }
}