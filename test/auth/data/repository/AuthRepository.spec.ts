import { expect } from 'chai'
import dotenv from 'dotenv'
import { beforeEach } from 'mocha'
import mongoose from 'mongoose'
import AuthRepository from '../../../../src/auth/data/repository/AuthRepository'

dotenv.config()

describe('AuthRepository', () => {
  let client: mongoose.Mongoose
  let sut: AuthRepository

  beforeEach(() => {
    client = new mongoose.Mongoose()
    const connectionStr = encodeURI(process.env.TEST_DB as string)
    client.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    sut = new AuthRepository(client)
  })

  afterEach(() => {
    client.disconnect()
  })

  it('should return user when email is found', async () => {
    //arrange
    
      const email = 'email@email.com'
      const password  = 'pass'

      const result = await sut.find(email)

      expect(result).to.not.be.empty
  })
})
