import CryptoJS from 'crypto-js'
import axios from 'axios';

// aes加密的key和iv
const AES_KEY = '';
const AES_IV = '';

export default {

  // 加密
  encrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : AES_KEY;
    ivStr = ivStr ? ivStr : AES_IV;
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);

    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.ciphertext.toString();
  },
  // 解密
  decrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : AES_KEY;
    ivStr = ivStr ? ivStr : AES_IV;
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);

    var decrypt = CryptoJS.AES.decrypt(word.toString(), key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
  }
};
