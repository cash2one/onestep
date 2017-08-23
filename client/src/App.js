import React, { Component } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Course from './components/Course'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/course/:id" component={Course} />
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
