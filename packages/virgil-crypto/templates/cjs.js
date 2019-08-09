const baseCrypto = require('@virgilsecurity/base-crypto');
const initFoundation = require('<%= foundation %>');
const sdkCrypto = require('@virgilsecurity/sdk-crypto');

const initCrypto = () => initFoundation().then(baseCrypto.setFoundationModules);

module.exports = {
  ...baseCrypto,
  ...sdkCrypto,
  initCrypto,
};