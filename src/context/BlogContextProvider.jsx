import React, { createContext, useState, useEffect } from 'react'

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {

    // membuat sebuah state post
    const [post, setPost] = useState([]);

    // mengambil api 
    const getBlogPost = async () => {
        // membuat sebuah variabel untuk mengambil api
        const data = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: "GET",
                header: {
                    "Content-Type": "application/json",
                }
            }
        )

        // mengembalikan dalam bentuk json
        const result = await data.json();
        return result;
    }

    useEffect(() => {
        getBlogPost()
            .then((res) => {
                setPost(res);
                // console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);


    return (
        <BlogContext.Provider value={{ post, setPost }}>
            {children}
        </BlogContext.Provider>
    )
}
