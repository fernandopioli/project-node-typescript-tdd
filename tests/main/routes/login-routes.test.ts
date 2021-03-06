import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import request from 'supertest'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('should return an account on success', async () => {
      await request(app).post('/api/signup')
        .send({
          name: 'Fernando',
          email: 'fernandohrp@gmail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(200)
    })
  })
  describe('POST /login', () => {
    test('should return 200 on login', async () => {
      const password = await hash('123456', 12)
      await accountCollection.insertOne({
        name: 'Fernando',
        email: 'fernandohrp@gmail.com',
        password: password
      })
      await request(app).post('/api/login')
        .send({
          email: 'fernandohrp@gmail.com',
          password: '123456'
        })
        .expect(200)
    })
    test('should return 401 on login', async () => {
      await request(app).post('/api/login')
        .send({
          email: 'fernandohrp@gmail.com',
          password: '123456'
        })
        .expect(401)
    })
  })
})
