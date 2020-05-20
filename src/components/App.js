import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import CountryDetail from './CountryDetail'
import NotFound from '../pages/404'

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:country' component={CountryDetail} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
