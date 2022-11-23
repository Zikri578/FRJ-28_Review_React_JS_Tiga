import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import DashboardId from './pages/DashboardId.jsx'
import DashboardSlug from './pages/DashboardSlug.jsx'
import Login from './pages/Login.jsx'
import Master from './pages/Master.jsx'
import Airline from './pages/Airline.jsx'
import Airport from './pages/Airport.jsx'
import User from './pages/User.jsx'
import { useState } from 'react'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import Provider from './pages/Provider.jsx'
import Blog from './pages/Blog.jsx'
import './App.css'

export default function App() {

  // soal 4 
  // implementasikan sebuah protected route

  // membuat sebuah state login
  const [isLogin, setIsLogin] = useState(false);
  // jika kondisi login bernilai benar maka akan di direct ke halaman selanjutnya yaitu dashboard
  if (isLogin) {
    return (
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route />
      </Routes>
    )
  }

  // jika tidak maka kembali ke halaman semula
  return (

    // Soal 1
    // Implementasikan routing pada react dengan menggunakan react-router-do
    // Berikut merupakan router dalam memindahkan halaman  
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/about' element={<About />} />
      <Route path="/context" element={<Provider />} />
      <Route path="/blog" element={<Blog />} />

      {/* Soal 2 */}
      {/* Berikut merupakan router menggunakan useParams */}
      {/* Menangkap sebuah params id dari sebuah routes dan di render ke komponent jsx */}
      <Route path='/dashboard/:id' element={<DashboardId />} />
      <Route path='/dashboard/:id/:slug' element={<DashboardSlug />} />
      {/* Menangkap sebuah params dari sebuah routes dan render ke komponent jsx */}

      {/* Soal 3 */}
      {/* buatlah sebuah screen yang mengimplementasikan outlet pada react router dom */}
      <Route path='/master' element={<Master />}>
        <Route index />
        <Route path='airline' element={<Airline />} />
        <Route path='airport' element={<Airport />} />
        <Route path='user' element={<User />} />
      </Route>
      {/* buatlah sebuah screen yang mengimplementasikan outlet pada react router dom */}

    </Routes>
    // Berikut merupakan router dalam memindahkan halaman

  )
}
