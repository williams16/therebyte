import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react';

import Header from './componets/layout/Header'
import Footer from './componets/layout/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
    </Router>
  );
}

export default App;
