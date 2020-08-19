const gray = require('./lib/gray')

const { argv } = require('./lib/arg')
const { split } = require('./lib/split')
const { resolve } = require('./lib/resolve')
const { readFile, writeFile } = require('./lib/file')
const { removeComment, removeSpace } = require('./lib/utils')
const { getGenerate, getGenerateOpts } = require('./lib/generate')

if (!argv.input) throw new Error('Please provide source file')

const inputPath = resolve(argv.input)
const outputPath = resolve(argv.output)

const opts = getGenerateOpts(argv)
const wrapedGenerate = getGenerate(opts)

/**
 * 生成colors
 * [{name:'$red'、colors:[x,x,x,x]}]
 */
const genColors = ([name, baseColor]) => ({
  name,
  colors: wrapedGenerate(baseColor),
})

/**
 * 为name添加prefix
 */
const addNamePrefix = item => {
  return {
    ...item,
    name:
      item.name.indexOf(argv.prefix) !== 0
        ? argv.prefix + item.name
        : item.name,
  }
}

/**
 * [
 *  {name:'$red',colors:['#f00','#f01']},
 *  {name:'$blue',colors:['#00f']}
 * ]
 * 转换为
 * [
 *  [{name:'$red-1',color:'#f00'},{name:'$red-2',color:'#f01'}],
 *  [{name:'$blue':color:'#00f'}]
 * ]
 */
const transformToArr = ({ name, colors }) =>
  colors.map((color, index) => ({
    name: `${name}-${index + 1}`,
    color,
  }))

/**
 * 生成单个颜色字符串
 */
const genSingleColorStr = ({ name, color }) =>
  `${name}${argv.colorSep}${color} ${argv.postfix}${argv.expressionSep}\r\n`

/**
 * 生成颜色字符串
 */
const genColorsStr = colors =>
  colors.map(color => genSingleColorStr(color)).join('')

/**
 * 生成sassMap主体字符串
 */
const genSassMap = colors => {
  return colors
    .map(({ name }) => {
      return `"${name}":${name},\r\n`
    })
    .join('')
}

/**
 * 生成sassMap字符串
 */
const genSassMapStr = arr =>
  `\r\n${argv.prefix}${argv.sassMapName}:(\r\n${arr.map(genSassMap).join('')})${
    argv.postfix
  }${argv.expressionSep}`

/**
 * 分词
 * [['$red','#f00'],['$blue','#00f']]
 */
const splitColor = str => split(str, argv.expressionSep, argv.colorSep)

readFile(inputPath, 'utf-8')
  .then(removeComment)
  .then(removeSpace)
  .then(splitColor)
  .then(arr => arr.map(genColors))
  .then(arr => (argv.gray ? arr.concat(gray) : arr)) // 追加灰度色阶
  .then(arr => arr.map(addNamePrefix))
  .then(arr => arr.map(transformToArr))
  .then(arr => {
    let str = arr.map(genColorsStr).join('\r\n')

    if (argv.sassMap) str += genSassMapStr(arr)

    return str
  })
  .then(str => writeFile(outputPath, str))
  .then(() => {
    console.log('Color palette generate success!\r\n', outputPath)
  })
  .catch(err => {
    console.log(err)
  })
