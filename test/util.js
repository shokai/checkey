/* eslint-env mocha */

import {uniq} from '../src/util'
import {assert} from 'chai'

describe('Util', function () {
  describe('uniq(arr)', function () {
    let result = uniq([1, 3, 2, 3, 1, 1, 3, 4, 2])
    it('filter duplicated item',
       () => assert.deepEqual(result.sort(), [1, 2, 3, 4]))
  })
})
