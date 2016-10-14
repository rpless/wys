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

import React from 'react'
import { connect } from 'react-redux'
import { storedFinancialPlanService } from '../../common'
import { addFinancialPlan } from '../actions/commands'

const AddStoredFinancialPlan = (props) => {
  return (
    <form onSubmit={props.createFinancialPlan}>
      <input name="plan_name" type="text" placeholder="Plan Name"></input>
      <input name="password" type="password" placeholder="Password"></input>
      <button>+</button>
    </form>
  )
}

const mapStateToProps = (state) => (state.login)
const mapDispatchToProps = (dispatch) => ({
  createFinancialPlan: (event) => {
    event.preventDefault()
    const form = event.target.elements
    const name = form['plan_name'].value
    const password = form['password'].value
    dispatch(addFinancialPlan(storedFinancialPlanService, name, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStoredFinancialPlan)
