import React from 'react'
import logo from './logo.svg'
import './App.css'
import Interaction from 'src/components/interaction/Interaction'
import AppProvider from 'src/state/app/Provider'
function App() {
  return (
    <AppProvider>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
        <Interaction />
      </div>
    </AppProvider>
  )
}

export default App
