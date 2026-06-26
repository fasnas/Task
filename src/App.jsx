import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import TrustedBy from './Pages/Indusrtry'
import Products from './Pages/Products'
import WhyChooseUs from './Pages/Whychoose'
import Contact from './Pages/Contactus'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <TrustedBy />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>

  )
}

export default App