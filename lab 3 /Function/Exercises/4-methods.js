'use strict';

function methods(iface) {
  return Object.keys(iface)
    .filter((key) => typeof iface[key] === 'function')
    .map((key) => [key, iface[key].length]);
}

module.exports = { methods };
