import React from 'react'
import './App.css'
import Welcome from './components/Welcome'
import House from './components/House'
import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/house/:name" component={House} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
