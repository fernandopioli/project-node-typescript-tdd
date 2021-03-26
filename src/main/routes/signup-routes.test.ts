import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app).post('/api/signup')
      .send({
        name: 'Fernando',
        email: 'fernandohrp@gmail.com',
        password: '123456',
        password_confirmation: '123456'
      })
      .expect(200)
  })
})
