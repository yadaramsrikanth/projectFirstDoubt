import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Popular from './components/Popular'
import MovieItemDetails from './components/MovieItemDetails'
import SearchComponent from './components/SearchComponent'
import Account from './components/Account'

import './App.css'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <ProtectedRoute exact path="/search" component={SearchComponent} />
    <ProtectedRoute exact path="/account" component={Account} />
    <NotFound />
  </Switch>
)

export default App
