import React from 'react'
import {BrowserRouter as Router, Routes ,  Route} from 'react-router-dom'
import HomePage from './pages/HomePage' 
import { ToastContainer } from "react-toastify"
import { Navbar } from './components/navbar' 
import { Footer } from './components/Footer'




export const RouteLib:React.FC = () => {
  return (
   <Router>
    <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     <Routes>
        <Route path='/' element={<HomePage />}  />  
     </Routes> 
  <Footer />
   </Router>
  )
}
