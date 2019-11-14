import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import React from 'react'
import Header from './componets/layout/Header'
import Footer from './componets/layout/Footer'
import Home from './componets/home/Home'
import Habilidades from './componets/habilidades/Habilidades'
import Experiencia from './componets/experiencia/Experiencia'
import About from './componets/about/About'

import './App.css';

const App =() => {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Habilidades" component={Habilidades}/>
      <Route exact path="/Experiencia" component={Experiencia}/>
      <Route exact path="/About" component={About}/>
      <Footer/>
    </Router>
  );
}

export default App;
