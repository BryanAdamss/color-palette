/**
 * @author GuangHui
 * @description 工具
 */

module.exports = {
  removeComment: (str) =>
    str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''),
  removeSpace: (str) => str.replace(/\s+/g, '').replace('/r/n', ''),
}
