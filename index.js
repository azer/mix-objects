module.exports = mix;

function mix (target, sources) {
  var i = -1;
  var len = sources.length;
  var key;

  while (++i < len) {
    for (key in sources[i]) {
      if (target.hasOwnProperty(key)) continue;
      target[key] = sources[i][key];
    }
  }

  return target;
}
