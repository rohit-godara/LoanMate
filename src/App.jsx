import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroSection from './HeroSection'
import CalculatorPage from './CalculatorPage'
import Layout from './components/Layout'
import Services from './components/Services'
import ContactPage from './components/ContactPage'



const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/Calculator' element={<CalculatorPage />} />
          <Route path='/Services' element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>    
  )
}

export default App