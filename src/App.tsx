import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <Route path='/' element={<h1>login</h1>} />
          <Route path='/Register' element={<h1>Register</h1>} />
          <Route path='/Leads' element={<h1>Leads</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
