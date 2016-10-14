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

/**
 * This module wires up the infrastructure and Application layers for use in the presentation Layer.
 */

//=====================================
// Repositories
//=====================================
import { inMemoryStoredPlanRepo } from './infrastructure/login/InMemoryStoredFinancialPlanRepository'

//=====================================
// Application Services
//=====================================
import { StoredFinancialPlanService } from './application/login/StoredFinancialPlanService'
const storedFinancialPlanService = StoredFinancialPlanService(inMemoryStoredPlanRepo())

//=====================================
// Wired Services
//=====================================
export { storedFinancialPlanService }
