export class ServerError extends Error {
  constructor (stack?: string) {
    super('Internal Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
