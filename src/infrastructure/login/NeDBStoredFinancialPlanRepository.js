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

import { app } from 'electron'
import R from 'ramda'
import crypto from 'crypto'
import fs from 'fs'
import path from 'path'
import Promise from 'bluebird'

import Datastore from 'nedb'

import type StoredFinancialPlan from '../domain/StoredFinancialPlan'

Promise.promisifyAll(fs)

type EncryptionT = (password: string) => string

const encryptionAlgorithm = 'aes192'

const deserializeNeDatabase = (password: string): EncryptionT => {
  return (data: string): string => {
    const decipher = crypto.createDecipher(encryptionAlgorithm, password)
    const decrypted = decipher.update(data, 'utf8', 'base64')
    return decrypted + decipher.final('base64')
  }
}
const serializeNeDatabase = (password: string): EncryptionT => {
  return (data: string): string => {
    const cipher = crypto.createCipher(encryptionAlgorithm, password)
    const encrypted = cipher.update(data, 'utf8', 'base64')
    return encrypted + cipher.final('base64')
  }
}

class NeDbStoredFinancialPlanRepository {
  databaseRootPath: string;

  constructor() {
    this.databaseRootPath = app.getPath('userData')
  }

  loadableFinancialPlans() {
    return fs.readdir(this.databaseRootPath).then((files) => (
      R.map((file) => ({ name: file }), files)
    ))
  }

  loadFinancialPlan(plan: StoredFinancialPlan, password: string) {
    const databasePath = path.join(this.databaseRootPath, plan.name)
    const db = this.createNeDb(databasePath, password)
    return new Promise((resolve, reject) => {
      db.loadDatabase((err) => {
        if (err) Promise.reject(err)
        else Promise.resolve(db)
      })
    })
  }

  createFinancialPlan(plan: StoredFinancialPlan, password: string) {
    const databasePath = path.join(this.databaseRootPath, plan.name)
    return fs.access(databasePath, fs.F_OK).then((data) => {
      // reject
    }).console.error((err) => {
      const db = this.createNeDb(databasePath, password)
      return db.loadDatabase((err) => {})
    });
  }

  createNeDb(databasePath: string, password: string) {
    return new Datastore({
      filename: databasePath,
      autoload: true,
      beforeSerialization: serializeNeDatabase(password),
      afterSerialization: deserializeNeDatabase(password)
    })
  }
}

export default NeDbStoredFinancialPlanRepository
