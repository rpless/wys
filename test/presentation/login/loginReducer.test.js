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

import reducer from '../../../src/presentation/reducers/reducers'
import { loadingFinancialPlans, financialPlansLoaded } from '../../../src/presentation/actions/events'

describe('The Login Reducer', function() {
  it('should transform add loaded financial plans when LoadingFinancialPlans', function() {
    const planState = []
    const result = reducer(planState, loadingFinancialPlans)
    result.should.be.deep.equal({ plans: [] })
  })

  it('should add loaded financial plans on a LoadedFinancialPlans', function() {
    const planState = []
    const newPlans = [{ name: 'plan' }]
    const result = reducer(planState, financialPlansLoaded(newPlans))
    result.should.be.deep.equal({ plans: [ { name: 'plan' } ] })
  })
})
