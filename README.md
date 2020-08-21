# @ghchu/color-palette

> Generate color palette file with [@ant-design/colors](https://www.npmjs.com/package/@ant-design/colors) algorithm

English | [中文](https://github.com/BryanAdamss/color-palette/blob/master/README.zh-CN.md)

## Install

```sh
npm i -D @ghchu/color-palette

or

yarn add @ghchu/color-palette -D
```

## Usage

- This plugin is design for `sass(scss)`(scss-first)
- You need chage the option when you use other preprocessor(`less、stylus、css3 vars`)

### Basic

- Just provide a base-color file path with `--input` like below and you will get a palette file in the current directory(`process.cwd()`).It is usually named `_color-palette.scss`

```json
"scripts":{
  "color": "color-palette --input _color-base.scss"
}
```

- base color file,like `_color-base.scss`

```scss
$red: #f5222d;
$volcano: #fa541c;
```

- the outpu palette file,`_color-palette.scss`

```scss
$red-1: #fff1f0 !default;
$red-2: #ffccc7 !default;
$red-3: #ffa39e !default;
$red-4: #ff7875 !default;
$red-5: #ff4d4f !default;
$red-6: #f5222d !default;
$red-7: #cf1322 !default;
$red-8: #a8071a !default;
$red-9: #820014 !default;
$red-10: #5c0011 !default;

$volcano-1: #fff2e8 !default;
$volcano-2: #ffd8bf !default;
$volcano-3: #ffbb96 !default;
$volcano-4: #ff9c6e !default;
$volcano-5: #ff7a45 !default;
$volcano-6: #fa541c !default;
$volcano-7: #d4380d !default;
$volcano-8: #ad2102 !default;
$volcano-9: #871400 !default;
$volcano-10: #610b00 !default;

$gray-1: #ffffff !default;
$gray-2: #fafafa !default;
$gray-3: #f5f5f5 !default;
$gray-4: #f0f0f0 !default;
$gray-5: #d9d9d9 !default;
$gray-6: #bfbfbf !default;
$gray-7: #8c8c8c !default;
$gray-8: #595959 !default;
$gray-9: #434343 !default;
$gray-10: #262626 !default;
$gray-11: #1f1f1f !default;
$gray-12: #141414 !default;
$gray-13: #000000 !default;
```

- The gray scale is hard-coded, from white(#fff) to black(#000), a total of 13 levels

### Input、Output

```json
"scripts":{
  "color": "color-palette --input ./src/sass/utils/_color-base.scss --output ./src/sass/utils/_color-palette.scss"
}
```

### Remove gary

```json
"scripts":{
  "color": "color-palette --input _color-base.scss --gray false"
}
```

### Generate sass map for all variables

```json
"scripts":{
  "color": "color-palette --input _color-base.scss --sassMap"
}
```

- the output palette

```scss
$red-1: #fff1f0 !default;
$red-2: #ffccc7 !default;
$red-3: #ffa39e !default;
$red-4: #ff7875 !default;
$red-5: #ff4d4f !default;
$red-6: #f5222d !default;
$red-7: #cf1322 !default;
$red-8: #a8071a !default;
$red-9: #820014 !default;
$red-10: #5c0011 !default;

$volcano-1: #fff2e8 !default;
$volcano-2: #ffd8bf !default;
$volcano-3: #ffbb96 !default;
$volcano-4: #ff9c6e !default;
$volcano-5: #ff7a45 !default;
$volcano-6: #fa541c !default;
$volcano-7: #d4380d !default;
$volcano-8: #ad2102 !default;
$volcano-9: #871400 !default;
$volcano-10: #610b00 !default;

$gray-1: #ffffff !default;
$gray-2: #fafafa !default;
$gray-3: #f5f5f5 !default;
$gray-4: #f0f0f0 !default;
$gray-5: #d9d9d9 !default;
$gray-6: #bfbfbf !default;
$gray-7: #8c8c8c !default;
$gray-8: #595959 !default;
$gray-9: #434343 !default;
$gray-10: #262626 !default;
$gray-11: #1f1f1f !default;
$gray-12: #141414 !default;
$gray-13: #000000 !default;

// sass map
$color-palette: (
  '$red-1': $red-1,
  '$red-2': $red-2,
  '$red-3': $red-3,
  '$red-4': $red-4,
  '$red-5': $red-5,
  '$red-6': $red-6,
  '$red-7': $red-7,
  '$red-8': $red-8,
  '$red-9': $red-9,
  '$red-10': $red-10,
  '$volcano-1': $volcano-1,
  '$volcano-2': $volcano-2,
  '$volcano-3': $volcano-3,
  '$volcano-4': $volcano-4,
  '$volcano-5': $volcano-5,
  '$volcano-6': $volcano-6,
  '$volcano-7': $volcano-7,
  '$volcano-8': $volcano-8,
  '$volcano-9': $volcano-9,
  '$volcano-10': $volcano-10,
  '$gray-1': $gray-1,
  '$gray-2': $gray-2,
  '$gray-3': $gray-3,
  '$gray-4': $gray-4,
  '$gray-5': $gray-5,
  '$gray-6': $gray-6,
  '$gray-7': $gray-7,
  '$gray-8': $gray-8,
  '$gray-9': $gray-9,
  '$gray-10': $gray-10,
  '$gray-11': $gray-11,
  '$gray-12': $gray-12,
  '$gray-13': $gray-13,
) !default;
```

### Dark mode

```json
"scripts":{
  "color": "color-palette --input _color-base.scss --dark"
}
```

- the output palette

```scss
$red-1: #2a1215 !default;
$red-2: #431418 !default;
$red-3: #58181c !default;
$red-4: #791a1f !default;
$red-5: #a61d24 !default;
$red-6: #d32029 !default;
$red-7: #e84749 !default;
$red-8: #f37370 !default;
$red-9: #f89f9a !default;
$red-10: #fac8c3 !default;

$volcano-1: #2b1611 !default;
$volcano-2: #441d12 !default;
$volcano-3: #592716 !default;
$volcano-4: #7c3118 !default;
$volcano-5: #aa3e19 !default;
$volcano-6: #d84a1b !default;
$volcano-7: #e87040 !default;
$volcano-8: #f3956a !default;
$volcano-9: #f8b692 !default;
$volcano-10: #fad4bc !default;

$gray-1: #ffffff !default;
$gray-2: #fafafa !default;
$gray-3: #f5f5f5 !default;
$gray-4: #f0f0f0 !default;
$gray-5: #d9d9d9 !default;
$gray-6: #bfbfbf !default;
$gray-7: #8c8c8c !default;
$gray-8: #595959 !default;
$gray-9: #434343 !default;
$gray-10: #262626 !default;
$gray-11: #1f1f1f !default;
$gray-12: #141414 !default;
$gray-13: #000000 !default;
```

- Use `#141414` to mix by default
  - You can set `backgroundColor` to change it
  - View [https://www.npmjs.com/package/@ant-design/colors](https://www.npmjs.com/package/@ant-design/colors) for detail

### less

- change `input、output、prefix、postfix`
  - `sassMap` is unavailable

```json
"scripts":{
  "color": "color-palette --input _color-base.less --output _color-palette.less --prefix @ --postfix '' "
}
```

- base-color file `_color-base.less`

```less
@red: #f5222d;
@volcano: #fa541c;
```

- the outpu palette file,`_color-palette.less`

```less
@red-1: #fff1f0;
@red-2: #ffccc7;
@red-3: #ffa39e;
@red-4: #ff7875;
@red-5: #ff4d4f;
@red-6: #f5222d;
@red-7: #cf1322;
@red-8: #a8071a;
@red-9: #820014;
@red-10: #5c0011;

@volcano-1: #fff2e8;
@volcano-2: #ffd8bf;
@volcano-3: #ffbb96;
@volcano-4: #ff9c6e;
@volcano-5: #ff7a45;
@volcano-6: #fa541c;
@volcano-7: #d4380d;
@volcano-8: #ad2102;
@volcano-9: #871400;
@volcano-10: #610b00;

@gray-1: #ffffff;
@gray-2: #fafafa;
@gray-3: #f5f5f5;
@gray-4: #f0f0f0;
@gray-5: #d9d9d9;
@gray-6: #bfbfbf;
@gray-7: #8c8c8c;
@gray-8: #595959;
@gray-9: #434343;
@gray-10: #262626;
@gray-11: #1f1f1f;
@gray-12: #141414;
@gray-13: #000000;
```

## Config

```javascript
// eg
// $red:#f00;$blue:00f;
// ; expressionSep
// : colorSep

module.exports = require('yargs')
  .boolean('dark') // dark mode
  .default('dark', false) // dark mode defaults to false
  .default('backgroundColor', '#141414') // The color that needs to be mixed in by default
  .boolean('gray') //  need gray
  .default('gray', true) // need gray defaults to true
  .default('prefix', '$') // the prefix uses the sass prefix $ by default$
  .default('postfix', '!default') // postfix defaults to '!default'
  .default('expressionSep', ';') // expression separator, the default is semicolon
  .default('colorSep', ':') // color value division symbol, default colon
  .default('output', './_color-palette.scss') // default output path
  .boolean('sassMap') // whether to generate sass map variables for all variables
  .default('sassMap', false) // no sass map variable is generated by default
  .default('sassMapName', 'color-palette') // The default variable name of sass map is color-palette
```

## NPM

- [vue-cli-plugin-auto-alias](https://www.npmjs.com/package/vue-cli-plugin-auto-alias)
- [@bryanadamss/drawing-board](https://www.npmjs.com/package/@bryanadamss/drawing-board)
- [@bryanadamss/num2chn](https://www.npmjs.com/package/@bryanadamss/num2chn)
- [ant-color-converter](https://www.npmjs.com/package/ant-color-converter)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [BryanAdamss@foxmail.com](https://github.com/BryanAdamss).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bryanadamss.github.io/"><img src="https://avatars3.githubusercontent.com/u/7441504?v=4" width="64px;" alt=""/><br /><sub><b>GuangHui</b></sub></a><br /><a href="#projectManagement-BryanAdamss" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
