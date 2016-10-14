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
import type { StoredFinancialPlanServiceT } from '../../application/login/StoredFinancialPlanService'
import {
  loadingFinancialPlans, financialPlansLoaded, creatingFinancialPlan, financialPlanCreated
} from './events'

export function loadFinancialPlans(storedFinancialPlanService: StoredFinancialPlanServiceT) {
   return (dispatch: Function) => {
     dispatch(loadingFinancialPlans)
     storedFinancialPlanService
       .existingFinancialPlans()
       .then((plans) => dispatch(financialPlansLoaded(plans)))
   }
}

export function addFinancialPlan(storedFinancialPlanService: StoredFinancialPlanServiceT, name: string, password: string) {
   return (dispatch: Function) => {
     dispatch(loadingFinancialPlans)
     storedFinancialPlanService
       .createPlan(name, password)
       .then((plan) => dispatch(financialPlanCreated(plan)))
   }
}
