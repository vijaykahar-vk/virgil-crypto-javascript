import { Data, VirgilCrypto, VirgilPrivateKey } from '@virgilsecurity/base-crypto';

export class VirgilPrivateKeyExporter {
  readonly virgilCrypto: VirgilCrypto;

  constructor(virgilCrypto: VirgilCrypto) {
    if (virgilCrypto == null) {
      throw new Error('`virgilCrypto` is required');
    }
    this.virgilCrypto = virgilCrypto;
  }

  exportPrivateKey(key: VirgilPrivateKey) {
    return this.virgilCrypto.exportPrivateKey(key);
  }

  importPrivateKey(keyData: Data) {
    return this.virgilCrypto.importPrivateKey(keyData);
  }
}
