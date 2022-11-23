import { createContext, useState } from 'react'


// soal 5
// implementasikan global state dengan react context
export const UserContext = createContext()

export default function UserContextProvider({ children }) {


    // membuat variabel objek yang disimpan kedalam state
    const [data, setData] = useState({
        username: "Muzik",
        email: "muzik@gmail.com",
        avatar: 'https://picsum.photos/seed/muzik/200/200'
    })

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}