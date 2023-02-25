import React from 'react'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Movie from './components/Movie'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App(){
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/F4-Contest-3" element={<Landing/>}/>
        <Route path="/movies/:movieID" element={<Movie/>}/>
      </Routes>
    </Router>
  )
}

export default App