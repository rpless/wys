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

export type LoginEvent = LoadingFinancialPlans
                       | LoadedFinancialPlans
                       | CreatingFinancialPlan
                       | CreatedFinancialPlan

export type LoadingFinancialPlans = { type: 'LOADING_FINANCIAL_PLANS' }
export type LoadedFinancialPlans = {
  type: 'LOADED_FINANCIAL_PLANS',
  plans: Array<StoredFinancialPlan>
}
export type CreatingFinancialPlan = { type: 'CREATING_FINANCIAL_PLANS' }
export type CreatedFinancialPlan = {
  type: 'CREATED_FINANCIAL_PLANS' ,
  plan: StoredFinancialPlan
}

export const LOADING_FINANCIAL_PLANS = 'LOADING_FINANCIAL_PLANS'
export const LOADED_FINANCIAL_PLANS = 'LOADED_FINANCIAL_PLANS'
export const CREATING_FINANCIAL_PLANS = 'CREATING_FINANCIAL_PLANS'
export const CREATED_FINANCIAL_PLANS = 'CREATED_FINANCIAL_PLANS'

export const loadingFinancialPlans = { type: LOADING_FINANCIAL_PLANS }
export const financialPlansLoaded = (plans: Array<StoredFinancialPlan>) => ({
  type: LOADED_FINANCIAL_PLANS,
  plans: plans
})
export const creatingFinancialPlan = { type: CREATING_FINANCIAL_PLANS }
export const financialPlanCreated = (plan: StoredFinancialPlan) => ({
  type: CREATED_FINANCIAL_PLANS,
  plan: plan
})
