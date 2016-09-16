/* eslint-env mocha */

import CheckeyResult from '../src/result'
import {assert} from 'chai'

describe('Result', function () {
  describe('class CheckeyResult', function () {
    it('is valid', function () {
      let res = new CheckeyResult([])
      assert.equal(res.isValid, true)
      assert.equal(res.isInvalid, false)
    })

    it('is not valid', function () {
      let res = new CheckeyResult(['bad'])
      res.errors.push('too bad')
      assert.equal(res.isValid, false)
      assert.equal(res.isInvalid, true)
      assert.deepEqual(res.errors, ['bad', 'too bad'])
    })
  })
})
