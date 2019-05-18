import { NativeModules } from 'react-native';

class EasyAlipay {
  constructor() {
    this.RNEasyAlipay = NativeModules.RNEasyAlipay;
    if (!this.RNEasyAlipay) {
      throw new Error('RNEasyAlipay load failed.');
    }
  }

  test() {
    console.log('222');
  }
}

export default new EasyAlipay();
