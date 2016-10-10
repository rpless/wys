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

import R from 'ramda'

export function StoredFinancialPlanService(storedFinancialPlanRepo: StoredFinancialPlanRepository) {
  return {
    createPlan: (name: string, password: string): Promise<Object> => {
      return storedFinancialPlanRepo.loadableFinancialPlans()
        .then((existingPlans) => {
          if (canCreatePlan(name)(existingPlans)) {
            return storedFinancialPlanRepo.createFinancialPlan({ name: name }, password)
          } else {
            return Promise.reject(planExistsError(name))
          }
        })
    },

    existingFinancialPlans: () => { return storedFinancialPlanRepo.loadableFinancialPlans() }
  }
}

function canCreatePlan(name: string): Function {
  return R.pipe(R.find(R.propEq('name', name)), R.isNil)
}

function planExistsError(name: string): Error {
  return new Error({ error: 'Plan exists', name: name })
}
