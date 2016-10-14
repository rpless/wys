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
import React, { PropTypes } from 'react'
import AddStoredFinancialPlan from '../containers/AddStoredFinancialPlan'

type StoredFinancialPlanListProp = {
  plans: Array<StoredFinancialPlanProp>
}
type StoredFinancialPlanProp = {
  name: string
}

const StoredFinancialPlanListView = (props: StoredFinancialPlanListProp) => {
  return (
    <div>
      <ul>
        {
           props.plans.map((plan) => {
             const planName = plan.name
             return <li key={planName}>{planName}</li>
           })
        }
      </ul>
      <AddStoredFinancialPlan />
    </div>
  )
}

const storedFinancialPlanProp = PropTypes.shape({
  name: PropTypes.string.isRequired
}).isRequired

StoredFinancialPlanListView.propTypes = {
  plans: PropTypes.arrayOf(storedFinancialPlanProp).isRequired
}

export default StoredFinancialPlanListView
