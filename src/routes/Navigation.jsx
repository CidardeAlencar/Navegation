import React from 'react'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Students } from '../components/Students'
import { BrowserRouter,Route,Routes,NavLink,Navigate } from 'react-router-dom';
import logo from '../assets/logo192.png'
function Navigation() {
  return (
    <BrowserRouter>
      <nav>
        <img src={logo} alt='Logo'></img>
        <ul>
          <li>
            <NavLink to='/home' className={({isActive})=>isActive ? 'nav-active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({isActive})=>isActive ? 'nav-active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/students' className={({isActive})=>isActive ? 'nav-active' : ''}>
              Students
            </NavLink>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='students' element={<Students/>}/>
          <Route path='/*' element={<Navigate to='/home'replace/> }/>
        </Routes>
    </BrowserRouter>
    
  )
}

export  {Navigation}