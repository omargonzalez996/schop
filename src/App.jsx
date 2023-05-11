import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
function App() {

  return (
    <>
      <div className='app-container'>
        <Header />
        <Menu />
      </div>
    </>
  )
}

export default App
