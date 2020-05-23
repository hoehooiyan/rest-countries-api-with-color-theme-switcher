import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import CountryDetail from './CountryDetail'

// const NewCountryDetail = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(routeProps) => (
//         <Layout>
//           <Component {...routeProps} />
//         </Layout>
//       )}
//     />
//   )
// }

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      {/* <NewCountryDetail path='/:country' component={CountryDetail} /> */}
      <Route path='/:country' component={CountryDetail} />
    </Switch>
  )
}

export default App
