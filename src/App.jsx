import React from 'react'
import Navbar from './componentes/navbar/Navbar'
import Layout from './componentes/layout/layout'
import Footer from './componentes/footer/Footer'
import Routes from './routes/Routes'

const App = () => {
  return (
    <>
   
   <Navbar/>
    <Layout>
    
      <Routes/>
  
    </Layout>
    <Footer/>
    
   
    
    </>
  )
}

export default App
