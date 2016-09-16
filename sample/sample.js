// var checkey = require('checkey')
var checkey = require('../')

// define schema which require "name", permit "name" & "web"
var schema = {
  require: [ 'name' ],
  permit: [ 'web' ]
}

// valid object
var result1 = checkey({
  name: 'shokai'
}, schema)
console.log('result1 is valid => ', result1.isValid)

// invalid object
var result2 = checkey({
  foo: 'bar'
}, schema)
console.log('result2 is valid => ', result2.isValid)
console.log(result2.errors)

// valid object
var result3 = checkey({
  name: 'shokai',
  web: 'http://shokai.org'
}, schema)
console.log('result3 is valid => ', result3.isValid)
