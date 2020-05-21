import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { ThemeProvider } from 'styled-components'

import Layout from './Layout'
import Home from '../pages/home'
import CountryDetail from './CountryDetail'
import NotFound from '../pages/404'
// import GlobalStyles from '../styles/index'
// import colors from '../styles/colors'

const NewCountryDetail = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  )
}

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <NewCountryDetail path='/:country' component={CountryDetail} />
      <Route />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
