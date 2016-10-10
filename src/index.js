require('../static/sass/main.scss');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { App, wysReducer } from './wys'

import { loadFinancialPlans } from './presentation/actions/commands'
import { storedFinancialPlanService } from './common'

let store = createStore(wysReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Load the stored plans.
loadFinancialPlans(storedFinancialPlanService)(store.dispatch)
