Array.prototype.map=function(fn){
    for(let i=0;i<this.length;i++){
        this[i] = fn(this[i])
    }
    return this
}
let arr=[1,2,3,4,5]
let res=arr.map(item=>item+3)
console.log(res)