import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage'

import Navbar from './components/Navbar/Navbar';
 import CreateForm from './CreateForm';
//  import Form from './components/Form/Form';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Homepage/>
              </Router>
    </>
  )
}

export default App
