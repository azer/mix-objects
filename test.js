var test = require('prova');
var mix = require("./");

test('mixes objects', function (t) {
  t.plan(1);

  var foo = { a: 1, b: 2 },
      bar = { c: 3, d: 4 },
      qux = { e: 5, f: 6 };

  mix(foo, [bar, qux]);

  t.deepEqual(foo, {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6
  });
});

test('skips already existing keys', function (t) {
  t.plan(1);

  var foo = { a: 1, b: 2, c: 3 },
      bar = { b: 4, c: 5, d: 6 },
      qux = { a: 7, d: 8, e: 9 };

  mix(foo, [bar, qux]);

  t.deepEqual(foo, {
    a: 1, b: 2, c: 3, d: 6, e: 9
  });
});

test('skips bad items in the array', function (t) {
  var foo = {};
  var bar = { yo: 1 };
  var qux = { lo: 2 };

  mix(foo, [bar, qux, undefined, null]);

  t.plan(1);
  t.deepEqual(foo, { yo: 1, lo: 2 });
});
