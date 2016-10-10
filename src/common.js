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
const storedFinancialPlanService = StoredFinancialPlanService(inMemoryStoredPlanRepo)

//=====================================
// Wired Services
//=====================================
export { storedFinancialPlanService }
