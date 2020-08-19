/**
 * @author GuangHui
 * @description 拆词
 */

const split = (str, sep, subSep) =>
  str
    .split(sep)
    .filter((item) => !!item)
    .map((item) => item.split(subSep))

module.exports = {
  split,
}
