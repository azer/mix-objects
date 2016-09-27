## mix-objects

Mix specified objects

## Install

```bash
$ npm install azer/mix-objects
```

## Usage

```js
var mix = require('mix-objects')

var foo = { a: 1, b: 2 }
var bar = { c: 3, d: 4 }
var qux = { e: 5, f: 6 }

mix(foo, [bar, qux])

foo
// => { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
```
