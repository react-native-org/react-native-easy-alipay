package org.reactnative.easy.alipay;

import com.facebook.react.bridge.*;

public class EasyAlipayModule  extends ReactContextBaseJavaModule {
    public EasyAlipayModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNEasyAlipay";
    }

    @ReactMethod
    public void test(String value, Promise promise) {
        promise.resolve(value);
    }
}
