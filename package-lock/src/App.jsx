import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./global.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
const App = () => {
  return (
    <div>
       <div className="homepage_container">
      <Router>
      <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>

      </Router>
      </div>
    </div>

  )
}

export default App