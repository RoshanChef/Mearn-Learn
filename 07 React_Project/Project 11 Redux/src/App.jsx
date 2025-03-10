import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import {configureStore} from '@reduxjs/toolkit'; 

const store = configureStore({}); 

export default function App() {
  return (
    <div>
      Home Page
      <Profile />
      <Login />
    </div>
  )
}
