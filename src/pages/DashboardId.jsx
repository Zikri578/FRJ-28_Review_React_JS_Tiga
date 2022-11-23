import React from 'react'
import { useParams } from 'react-router-dom'

export default function DashboardId() {

    // menggunakan variabel id 
    const { id } = useParams();

    return (
        <div>
            {/* menangkap variabel id  */}
            <h1>Dashboard ID : {id}</h1>
        </div>
    )
}
