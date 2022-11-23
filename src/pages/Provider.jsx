import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider';


// soal 5
// implementasikan global state dengan react context
// menampilkan output
export default function User() {
    const { data } = useContext(UserContext);
    return (
        <div>
            <h1>Context</h1>
            <h2>welcome, {data.username}</h2>
            <h3>hi, {data.email}</h3>
            <img src={data.avatar} alt={data.username} />
        </div>
    )
}