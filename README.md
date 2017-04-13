# D3:文档

<a href="https://d3js.org"><img src="https://d3js.org/logo.svg" align="left" hspace="10" vspace="6"></a>
D3（或js）是一个JavaScript库，基于web标准，用于可视化数据的展示。D3利用SVG，,Canvas和HTML来将数据带到web界面。D3结合强大的可视化和交互技术，给你充分的能力用数据驱动的方式对DOM操作，实用于各流行浏览器。

兼容性：也就是必须支持svg和canvas的浏览器

## 相关资源

* [API 文档](https://github.com/d3/d3/blob/master/API.md)
* [Release Notes](https://github.com/d3/d3/releases)
* [动态效果库](https://github.com/d3/d3/wiki/Gallery)
* [例子](https://bl.ocks.org/mbostock)
* [Wiki](https://github.com/d3/d3/wiki)

## 安装

使用npm, `npm install d3`. 另一种防护四, 下载d3 [最后的发布版本](https://github.com/d3/d3/releases/latest). 最后的发布版本支持AMD，commonJS规范. 或者你直接下载[d3js.org](https://d3js.org), [CDN链接](https://cdnjs.com/libraries/d3), or [unpkg](https://unpkg.com/d3/). 例子:

```html
<script src="https://d3js.org/d3.v4.js"></script>
```

压缩版:

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
```

可以选择其他版本, [d3-selection](https://github.com/d3/d3-selection):

```html
<script src="https://d3js.org/d3-selection.v1.js"></script>
```

D3 使用ES6书写的[ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html). Create a [custom bundle using Rollup](https://bl.ocks.org/mbostock/bb09af4c39c79cffcde4), Webpack, or your preferred bundler. To import D3 into an ES2015 application, either import specific symbols from specific D3 modules:

```js
import {scaleLinear} from "d3-scale";
```

Or import everything into a namespace (here, `d3`):

```js
import * as d3 from "d3";
```

node环境中:

```js
var d3 = require("d3");
```

你可以将d3里的模块进行组装，成一个对象 [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign):

```js
var d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));
```
