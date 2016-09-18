export class CheckeyError extends Error {
  constructor (message) {
    super(message)
    this.name = 'CheckeyError'
  }
}
