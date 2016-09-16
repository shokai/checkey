/* eslint-env mocha */

import {assert} from 'chai'
import checkey from '../src/'

describe('checkey', function () {
  it('is a function', function () {
    assert.isFunction(checkey)
  })

  describe('permit', function () {
    describe('valid keys', function () {
      const result = checkey({
        name: 'shokai',
        url: 'http://shokai.org'
      }, {
        permit: ['name', 'url', 'fullName']
      })
      it('is valid', () => assert.ok(result.isValid))
    })

    describe('not permit unregisterd key', function () {
      const result = checkey({
        name: 'shokai',
        url: 'http://shokai.org',
        fullllllllName: 'Sho Hashimoto' // unregisterd key
      }, {
        permit: ['name', 'url', 'fullName']
      })
      it('is not valid', () => assert.ok(result.isInvalid))
      it('has 1 error', () => assert.lengthOf(result.errors, 1))
    })
  })

  describe('require', function () {
    describe('valid keys', function () {
      const result = checkey({
        name: 'shokai',
        url: 'http://shokai.org'
      }, {
        require: ['name', 'url']
      })
      it('is valid', () => assert.ok(result.isValid))
    })

    describe('required key is missing', function () {
      const result = checkey({
        name: 'shokai',
        url: 'http://shokai.org'
      }, {
        require: ['name', 'url', 'fullName']
      })
      it('is not valid', () => assert.ok(result.isInvalid))
      it('has 1 error', () => assert.lengthOf(result.errors, 1))
    })
  })

  describe('permit & require', function () {
    describe('combine require into permit', function () {
      const result = checkey({
        name: 'shokai',
        url: 'http://shokai.org'
      }, {
        require: ['name'],
        permit: ['url']
      })
      it('is valid', () => assert.ok(result.isValid))
    })
  })
})
