import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ServerPovider from './server.provider';
import LeadsPage from './pages/Leads/LeadPage';
import LeadType from './types/Lead.type';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const leads: LeadType[] = []
  return (
    <>
      <ServerPovider.Provider value={{email:email,setEmail:setEmail,password:password,setPassword:setPassword , Leads:leads}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Leads' element={<LeadsPage />} />
        </Routes>
      </BrowserRouter>
      </ServerPovider.Provider>
    </>
  )
}

export default App
