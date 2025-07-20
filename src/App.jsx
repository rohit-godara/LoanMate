import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroSection from './HeroSection'
import CalculatorPage from './CalculatorPage'
import Layout from './components/Layout'
import Services from './components/Services'
import ContactPage from './components/ContactPage'
import Login from './components/Login'
import SignupPage from './components/SignupPage'



const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/Calculator' element={<CalculatorPage />} />
          <Route path='/Services' element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Layout>
    </Router>    
  )
}

export default App