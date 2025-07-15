import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroSection from './HeroSection'
import CalculatorPage from './CalculatorPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/Calculator' element={<CalculatorPage />} />
        </Routes>
      </Layout>
    </Router>    
  )
}

export default App