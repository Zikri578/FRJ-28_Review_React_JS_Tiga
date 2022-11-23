import React from 'react'
import { useParams } from 'react-router-dom'

export default function DashboardSlug() {

    // membuat sebuah variabel id dan slug
    const { id, slug } = useParams();
    return (
        <div>
            <h1> Dashboard Slug ID : {id}</h1>
            <p>Isi Konten : {slug}</p>
        </div>
    )
}
