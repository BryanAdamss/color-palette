/**
 * @author GuangHui
 * @description generate
 */

const { generate } = require('@ant-design/colors')

const getGenerate = (opts) =>
  opts
    ? (baseColor) => generate(baseColor, opts)
    : (baseColor) => generate(baseColor)

const getGenerateOpts = ({ dark, backgroundColor }) => {
  let opts = {}
  if (dark) {
    opts.theme = 'dark'
    if (backgroundColor) opts.backgroundColor = backgroundColor
  } else {
    opts = null
  }

  return opts
}

module.exports = {
  getGenerate,
  getGenerateOpts,
}
