import { StrictMode, useState } from 'react'
import './App.css'
import Jugadores from '../modules/baseJugadores/index'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateTask from '../modules/Detalle';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jugadores />} exact />    
        <Route path="/update" element={<UpdateTask/>} />
      </Routes>
    </Router>
  )
}

export default App
