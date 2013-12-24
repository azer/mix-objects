var mix = require("./");

it('mixes objects', function(){
  var foo = { a: 1, b: 2 },
      bar = { c: 3, d: 4 },
      qux = { e: 5, f: 6 };

  mix(foo, [bar, qux]);

  expect(foo).to.deep.equal({
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6
  });
});

it('skips already existing keys', function(){
  var foo = { a: 1, b: 2, c: 3 },
      bar = { b: 4, c: 5, d: 6 },
      qux = { a: 7, d: 8, e: 9 };

  mix(foo, [bar, qux]);

  expect(foo).to.deep.equal({
    a: 1, b: 2, c: 3, d: 6, e: 9
  });
});
