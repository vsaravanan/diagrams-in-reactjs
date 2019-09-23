import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import data_workflows from './reducer-workflows'
import workflow from './reducer-workflow'

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    data_workflows,
    workflow,
  })

export default reducers
