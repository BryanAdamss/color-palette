/**
 * @author GuangHui
 * @description resolve
 */
const path = require('path')

const resolve = (dir) => path.resolve(process.cwd(), dir)

module.exports = {
  resolve,
}
