import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ServerPovider from './server.provider';
import LeadsPage from './pages/Leads/LeadPage';
import LeadType from './types/Lead.type';
import VideoBlock from './pages/extras.Page';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const leads: LeadType[] = []
  return (
    <>
      <ServerPovider.Provider value={{email:email,setEmail:setEmail,name:name,setName:setName,password:password,setPassword:setPassword , Leads:leads ,}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Leads' element={<LeadsPage />} />
          <Route path='/extra' element={<VideoBlock />} />
        </Routes>
      </BrowserRouter>
      </ServerPovider.Provider>
    </>
  )
}

export default App
