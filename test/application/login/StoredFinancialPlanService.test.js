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

const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
const should = chai.should()

import { StoredFinancialPlanService } from '../../../src/application/login/StoredFinancialPlanService'
const testInMemoryStoredPlanRepo = {
  loadableFinancialPlans: () => {
    return Promise.resolve([{ name: 'existing' }])
  },

  loadFinancialPlan: (plan, password) => { return Promise.resolve({}) },

  createFinancialPlan: (plan, password) => { return Promise.resolve(plan) }
}

describe('The StoredFinancialPlanService', function() {
  const service = StoredFinancialPlanService(testInMemoryStoredPlanRepo)

  describe('#createPlan', function() {
    it('should create a plan if there is no existing plan', function() {
      return service.createPlan('not-existing', 'password').should.eventually.deep.equal({ name: 'not-existing' })
    })

    it('should error if a plan with the same exists', function() {
      return service.createPlan('existing', 'password').should.be.rejectedWith(Error)
    })
  })
})
