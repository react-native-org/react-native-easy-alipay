# react-native-easy-alipay
Wrap Alipay SDK for react-native.

# 如何修改端口？

## Server

```bash
npm start --port 8001
```

## Android

进行模拟器之后，Command + M (MacOS) 打开工具栏，在 Dev Settings -> Debug server host & port of service 中，设置新的 host 和端口，一般使用本地IP + 端口，如：192.168.1.5:8001。

## iOS


# 如何将修改在examples中生效？

1. 利用 npm pack 打包当前插件包（注意：使用 .npmignore 来忽略 examples 文件）
2. 在 examples 目录中，通过执行 npm i ../react-native-easy-alipay-0.0.1.tgz 来本地安装依赖（cd examples && npm run dep)
3. 启动 examples 的 App，即可测试。
