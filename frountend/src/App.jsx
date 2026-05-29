import React from 'react'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Notebook from './pages/Notebook'
import Sign from './pages/Sign'
import Login from './pages/Login'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/'  element={<Login />}  />

        <Route path='/sign'  element={<Sign/>}  />

        <Route path='/Notebook'  element={<Notebook/>}  />

      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App