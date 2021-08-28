import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path='/About' component={About}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App

