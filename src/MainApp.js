import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import configureStore, { history } from './store'

import App from './App'

const store = configureStore()

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default MainApp