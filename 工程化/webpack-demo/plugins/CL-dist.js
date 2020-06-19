 function CLDist(){}

CLDist.prototype.apply = function(compiler){
    let start,end,cost
    compiler.hooks.entryOption.tap('CLDist',compilation => {
        console.log('start...\n')
        start = Date.now()
        console.log(start)
    })
    compiler.hooks.done.tap('CLDist',compilation => {
        console.log('end...\n')
        end = Date.now()
        console.log(end)
        console.log('cost:'+ (end-start))
    })
}
module.exports = CLDist