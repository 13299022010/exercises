Array.prototype.reduce=function(fn,init){
    let res;
    if(init!==undefined){
        res = fn(init,this[0])
    }else{
        res = fn(this[0],this[1])
    }
    for(let i=(init===undefined?2:1);i<this.length;i++){
        res = fn(res,this[i])
    }
    return res
}
let arr=[1,'a','v',3,4,5]
let res=arr.reduce((v1,v2)=>v1+v2,0)
console.log(res)
arr=[3,-1,4,4]
res = arr.reduce((v1,v2)=>v1+v2**2,0)
console.log(res)
