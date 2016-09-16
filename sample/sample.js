// var checkey = require('checkey')
var checkey = require('../')

// define schema which require "name", permit "name" & "web" & "mail"
var schema = {
  require: ['name'],
  permit: ['web', 'mail']
}

// valid object
var result1 = checkey({
  name: 'shokai'
}, schema)
console.log('result1 is valid => ', result1.isValid)

// valid object
var result2 = checkey({
  name: 'shokai',
  web: 'http://shokai.org',
  mail: 'hashimoto@shokai.org'
}, schema)
console.log('result2 is valid => ', result2.isValid)

// invalid object ... "name" is required, "fullname" is not pemited
var result3 = checkey({
  fullname: 'Sho Hashimoto',
  web: 'http://shokai.org',
  mail: 'hashimoto@shokai.org'
}, schema)
console.log('result3 is valid => ', result3.isValid)
console.log(result3.errors)

