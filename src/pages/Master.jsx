import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Master() {
    return (
        <div>
            <h1>Halaman Master</h1>
            <Outlet />
        </div>
    )
}
