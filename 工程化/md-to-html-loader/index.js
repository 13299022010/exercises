let loader_utils = require('loader-utils')

module.exports =  md_to_html
function md_to_html(source){
    const options = loader_utils.getOptions(this)
    console.log(source)

    let md = require('markdown-it')({
        html: options.html,
        linkify: options.linkify,
        typographer: options.typographer
    })
    let result = md.render(source);
    console.log(result)

    return result
}