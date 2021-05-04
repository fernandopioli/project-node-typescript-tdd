export class EmailInUseError extends Error {
  constructor () {
    super('This email has already been used')
    this.name = 'EmailInUseError'
  }
}
