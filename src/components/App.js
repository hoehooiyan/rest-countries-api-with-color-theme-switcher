import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import NotFound from '../pages/404'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
