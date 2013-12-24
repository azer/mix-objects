module.exports = mix;

function mix (target, sources) {
  var i = sources.length;
  var key;

  while (i--) {
    for (key in sources[i]) {
      target[key] = sources[i][key];
    }
  }

  return target;
}
