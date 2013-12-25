module.exports = multiple;
module.exports.one = one;

function multiple (target, sources) {
  var i = -1;
  var len = sources.length;
  var key;

  while (++i < len) {
    one(target, sources[i]);
  }

  return target;
}

function one (target, source) {
  var key;
  for (key in source) {
    if (target.hasOwnProperty(key)) continue;
    target[key] = source[key];
  }
}
