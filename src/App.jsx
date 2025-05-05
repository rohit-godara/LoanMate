import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroSection from './HeroSection'
import CalculatorPage from './CalculatorPage'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/Calculator' element={<CalculatorPage />} />
        </Routes>
      </Router>
  )
}

export default App