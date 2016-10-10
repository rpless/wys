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
 * A StoredFinancialPlan is an Entity that is being stored
 * so that it can be loaded into the Application.
 *
 * @param name The name of the plan being stored.
 *              Serves as a unique idenitifer of the StoredFinancialPlan
 */
declare type StoredFinancialPlan = {
  name: string
}

/**
 * This repository provides access to existing StoredFinancialPlans
 */
declare interface StoredFinancialPlanRepository {
  /**
   * Returns all Stored Financial Plans that can be loaded.
   */
  loadableFinancialPlans(): Promise<Array<StoredFinancialPlan>>;

  /**
   * Attempt to load a Financial Plan
   */
  loadFinancialPlan(plan: StoredFinancialPlan, password: string): Promise<Object>;

  /**
   * Create a new Financial Plan.
   */
  createFinancialPlan(plan: StoredFinancialPlan, password: string): Promise<Object>;
}
