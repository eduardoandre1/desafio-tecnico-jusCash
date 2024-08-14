import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

function App() {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`latitude: ${latitude} e Longitude: ${longitude}`)
        })
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Leads' element={<h1>Leads</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
