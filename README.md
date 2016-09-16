# ChecKey

check keys existence.

- https://github.com/shokai/checkey
- https://npmjs.com/package/checkey

[![CircleCI](https://circleci.com/gh/shokai/checkey.svg?style=svg)](https://circleci.com/gh/shokai/checkey)

## Usage

```javascript
var checkey = require('checkey')

// define schema which require "name", permit "name" & "web" & "mail"
var schema = {
  require: ['name'],
  permit: ['web', 'mail']
}

// valid object
var result1 = checkey({
  name: 'shokai'
}, schema)
console.log('result1 is valid => ', result1.isValid) // true

// valid object
var result2 = checkey({
  name: 'shokai',
  web: 'http://shokai.org',
  mail: 'hashimoto@shokai.org'
}, schema)
console.log('result2 is valid => ', result2.isValid) // true

// invalid object ... "name" is required, "fullname" is not pemited
var result3 = checkey({
  fullname: 'Sho Hashimoto',
  web: 'http://shokai.org',
  mail: 'hashimoto@shokai.org'
}, schema)
console.log('result3 is valid => ', result3.isValid) // false
console.log(result3.errors) // [ 'require "name"', 'not permit "fullname"' ]
```


## Develop

install dependencies

    % npm install

build

    % npm run build
    or
    % npm run watch

test

    % npm test
