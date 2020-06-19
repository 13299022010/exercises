// import { getOptions } from 'loader-utils'
let lu = require('loader-utils')

module.exports =  loaderTest
function loaderTest(source) {
    const options =lu.getOptions(this)

    source = source.replace(/\[name\]/g,options.name)
    console.log(source)
    console.log(11111111111111111111111)
    // return `export default ${JSON.stringify(source)}`
    return source
}