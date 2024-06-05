import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.pages.jsx'
import SignIn from './pages/SignIn.pages.jsx'
import SignUp from './pages/SignUp.pages.jsx'
import Profile from './pages/Profile.pages.jsx'
import About from './pages/About.pages.jsx'
import Header from './components/Header.component.jsx'
import PrivateRoute from './components/PrivateRoute.component.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route element={<PrivateRoute/>} >
          <Route path='/profile' element={<Profile/>} />  
        </Route>
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}
