Array.prototype.filter=function(fn){
    let arr = []
    for(let i = 0;i<this.length;i++){
        if(fn(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}
let arr1=[1,2,3,4,5]
let res=arr1.filter(item=>item>3)
console.log(res)
