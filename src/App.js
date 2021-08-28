import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router forceRefresh>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route  path='/About' component={About}/>
        <Route  path='/Profile' component={Profile}/>
        <Route exact path='/' component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App

