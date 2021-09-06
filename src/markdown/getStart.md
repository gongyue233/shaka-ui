# 快速上手

本文会引导你快速上手 Shaka 组件。

## 安装

可以通过 npm 进行安装：

```bash
npm install shaka-ui
```

## 引入

安装后，输入以下代码便可使用 Shaka 提供的组件了：

```js
import { ShakaButton, openShakaDialog, ShakaDialog, ShakaSwitch, ShakaTab, ShakaTabs} from "shaka-ui";
import "shaka-ui/dist/lib/shaka.css";
```

建议使用者在 vue.config.js 内输入：

```js
//vue.config.js 
const path = require(`path`);

module.exports = {
    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                vue: path.resolve(`./node_modules/vue`)
            }
        }
    }
};
```

## 注意
在下面的组件示例代码中，组件的引入地址是 ../../../lib, 例如 ShakaButton 组件的引入示例是：
```js
import ShakaButton from "../../../lib/ShakaButton.vue";
```
**使用时，应将引入改为**：
```js
import { ShakaButton } from "shaka-ui";
```



