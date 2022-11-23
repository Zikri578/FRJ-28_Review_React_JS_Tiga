import React from 'react'
import { Outlet } from 'react-router-dom'

export default function User() {
    return (
        <div>
            <h2>Halaman User</h2>
            <Outlet />
        </div>
    )
}
