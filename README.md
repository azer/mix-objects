## mix-objects

Mix specified objects

## Install

```bash
$ npm install mix-objects
```

## Usage

```js
mix = require('mix-objects')

foo = { a: 1, b: 2 }
bar = { c: 3, d: 4 }
qux = { e: 5, f: 6 }

mix(foo, [bar, qux])

foo
// => { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
```
