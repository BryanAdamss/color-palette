/**
 * @author GuangHui
 * @description 命令行参数
 */

// eg
// $red:#f00;$blue:00f;
// ;为表达式分割符
// :为色值分割符

module.exports = require('yargs')
  .boolean('dark') // 是否暗黑模式
  .default('dark', false) // dark默认false
  .default('backgroundColor', '#141414') // 暗黑默认需要混入的颜色
  .boolean('gray') // 是否需要灰度色阶
  .default('gray', true) // 默认需要灰度色阶
  .default('prefix', '$') // 前缀默认使用sass前缀$
  .default('postfix', '!default') // 后缀默认为sass变量的默认值后缀
  .default('expressionSep', ';') // 表达式分割符，默认为分号
  .default('colorSep', ':') // 色值分割符号
  .default('output', './_color-palette.scss') // 默认输出路径
  .boolean('sassMap') // 是否为所有的变量生成sass map变量
  .default('sassMap', false) // 默认不生成sass map 变量
  .default('sassMapName', 'color-palette') // sass map默认变量名为color-palette
