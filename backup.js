const fs = require('fs')
const antColor = require('@ant-design/colors')

const antColorConvert = (inputColorFilePath, outputColorPath) => {
  fs.readFile(inputColorFilePath, 'utf-8', (err, data) => {
    if (err) return

    const dataArr = data
      .split('\r\n')
      .filter((item) => item)
      .map((item) => {
        const splited = item.split(':')
        const key = splited[0].trim()
        const value = splited[1].trim().replace(/;$/, '')
        return {
          name: key,
          color: value,
        }
      })

    let colorStr = ''
    dataArr.forEach((rule) => {
      const { name, color } = rule
      const antColorsArr = antColor.generate(color)

      antColorsArr.forEach((color, index) => {
        colorStr += `${name}-${index + 1}:${color};\r\n`
      })

      colorStr += '\r\n'
    })

    fs.writeFile(outputColorPath, colorStr, (err) => {
      console.log(err)
    })
  })
}

module.exports = antColorConvert
