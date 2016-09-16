export default class CheckeyResult {

  constructor (errors = []) {
    if (!(errors instanceof Array)) {
      throw new Error('ArgumentError: errors must be an Array')
    }
    this.errors = errors
  }

  get isValid () {
    return this.errors.length < 1
  }

  get isInvalid () {
    return !this.isValid
  }

}
