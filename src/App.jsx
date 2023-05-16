import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import CrudPaises from './components/modals/CrudlPaises';

function App() {
  const [buttonActive, setButtonActive] = useState();
  return (
    <>
      <div className='app-container'>
        <Header />
        <Menu buttonActive={buttonActive} setButtonActive={setButtonActive} />
        <div className='crud-container'>
          {buttonActive === 1 ? <CrudPaises /> : null}
        </div>
      </div>
    </>
  )
}

export default App
