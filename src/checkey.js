import {uniq} from './util'
import Result from './result'

const DEFAULT_SCHEMA = {
  permit: [],
  require: []
}

export function checkey (obj, schema) {
  let {permit, require} = Object.assign(DEFAULT_SCHEMA, schema)
  if (!(permit instanceof Array)) {
    throw new Error('Argument Error: "permit" is not an Array')
  }
  if (!(require instanceof Array)) {
    throw new Error('Argument Error: "require" is not an Array')
  }
  permit = uniq(permit.concat(require))
  const result = new Result()

  // check require
  for (let k of require) {
    if (!obj.hasOwnProperty(k)) {
      result.errors.push(`require "${k}"`)
    }
  }

  // check non-permit key
  for (let k of Object.keys(obj)) {
    if (permit.indexOf(k) < 0) {
      result.errors.push(`not permit "${k}"`)
    }
  }
  return result
}
