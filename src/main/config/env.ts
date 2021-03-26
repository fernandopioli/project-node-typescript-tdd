export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/test-app',
  port: process.env.PORT ?? '5050'
}
