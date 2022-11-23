import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Airport() {
    return (
        <div>
            <h2>Halaman Airport</h2>
            <Outlet />
        </div>
    )
}
