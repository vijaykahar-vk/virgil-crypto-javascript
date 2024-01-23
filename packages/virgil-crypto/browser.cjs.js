const { initCrypto } = require('./dist/browser.cjs');

module.exports = require('./dist/browser.cjs');

module.exports.initCrypto = options => initCrypto(options);
