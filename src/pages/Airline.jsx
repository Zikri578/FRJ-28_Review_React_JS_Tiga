import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Airline() {
    return (
        <div>
            <h2>Halaman Airline</h2>
            <Outlet />
        </div>
    )
}
