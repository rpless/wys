/**
Copyright (C) 2016 Ryan Plessner
This file is part of Wys.

Wys is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Wys is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Wys. If not, see <http://www.gnu.org/licenses/>.
*/

// @flow
import type { LoginEvent } from '../actions/events'
import R from 'ramda'
import {
  LOADING_FINANCIAL_PLANS, LOADED_FINANCIAL_PLANS,
  CREATING_FINANCIAL_PLANS, CREATED_FINANCIAL_PLANS } from '../actions/events'
import { combineReducers } from 'redux'

const intialPlans = []

function plans(state: Array<StoredFinancialPlan> = intialPlans, action: LoginEvent) {
  switch (action.type) {
    case CREATING_FINANCIAL_PLANS:
    case LOADING_FINANCIAL_PLANS: return state
    case CREATED_FINANCIAL_PLANS: return R.append(action.plan, state)
    case LOADED_FINANCIAL_PLANS:  return R.concat(state, action.plans)
    default: return state
  }
}

const rootReducer = combineReducers({
  plans: plans
})

export default rootReducer
