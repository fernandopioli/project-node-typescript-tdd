export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/test-app',
  port: process.env.PORT ?? '8080',
  jwtSecret: process.env.JWT_SECRET ?? 'jif7D&MFCM87@$##.Hbf52F9$#'
}
