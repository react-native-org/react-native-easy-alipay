import { NativeModules } from 'react-native';

class EasyAlipay {
  constructor() {
    this.RNEasyAlipay = NativeModules.RNEasyAlipay;
    if (!this.RNEasyAlipay) {
      throw new Error('RNEasyAlipay load failed.');
    }
  }

  test() {
    return this.RNEasyAlipay.test('999');
  }
}

export default new EasyAlipay();
