import CryptoJS from 'crypto-js'

export default {
  // 加密
  encrypt(word, keyStr, ivStr) {
    keyStr = keyStr || 'xxzxgtkjinfoplat'
    ivStr = ivStr || 'platformgtkjinfo'
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const iv = CryptoJS.enc.Utf8.parse(ivStr)
    const srcs = CryptoJS.enc.Utf8.parse(word)

    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return encrypted.toString()
  },
  // 解密
  decrypt(word, keyStr, ivStr) {
    keyStr = keyStr || 'xxzxgtkjinfoplat'
    ivStr = ivStr || 'platformgtkjinfo'
    var key = CryptoJS.enc.Utf8.parse(keyStr)
    const iv = CryptoJS.enc.Utf8.parse(ivStr)

    var decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return decrypt.toString(CryptoJS.enc.Utf8)
  }
}
