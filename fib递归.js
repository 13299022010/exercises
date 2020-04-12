/**
 * 斐波那契数列递归无缓存
 */
function fib(n){
    if(n===1 || n===2) return 1
    return fib(n-1)+fib(n-2)
}
// let begin = new Date().getTime()
// console.log(fib(40))
// let end = new Date().getTime()
// console.log("cost " + (end-begin) + "ms" )

/**
 * 斐波那契数列递归缓存
 */
let arr = []
function fibCache(n){
    if(n===1||n===2) return 1
    return (arr[n-1]?arr[n-1]:arr[n-1]=fibCache(n-1)) +(arr[n-2]?arr[n-2]:arr[n-2]=fibCache(n-2))
}

// let begin = new Date().getTime()
// console.log(fibCache(40))
// let end = new Date().getTime()
// console.log("cost " + (end-begin) + "ms" )
// console.log(arr)


/**
 * 斐波那契数列非递归
 */
function fibf(n){
    if(n<3) return 1
    let fib1 = 1,fib2 = 1,fibi
    for(let i = 3;i<=n;i++){
        fibi = fib1 + fib2
        fib1 = fib2
        fib2 = fibi
    }
    return fibi
}

let begin = new Date().getTime()
console.log(fibf(40))
let end = new Date().getTime()
console.log("cost " + (end-begin) + "ms" )

