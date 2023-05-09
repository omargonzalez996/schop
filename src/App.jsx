import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'

function App() {

  return (
    <>
      <div className='app-container'>
        <Header />
        <Products />
      </div>
    </>
  )
}

export default App
