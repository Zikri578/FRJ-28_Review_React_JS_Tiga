import React from 'react'
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContextProvider.jsx';


export default function Blog() {

    // mengambil variabel post 
    const { post } = useContext(BlogContext);

    return (
        <div>
            <h1>Blog Context Provider</h1>

            {/* menampilkan data api */}
            {post.map((event) => {
                return (
                    <div key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.body}</p>
                    </div>
                )
            })}

        </div>
    )
}
