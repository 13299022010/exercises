function deepCopy(src){
    let res = Array.isArray(src)?[]:{}
    
    for(let key in src){
        if(typeof src[key] ==="object"&&src[key]!==null){

                res[key] = deepCopy(src[key])
           
        }else{
            res[key] = src[key]
        }
    }
    return res
}

let arr=[1,1,1]
arr.push(arr)
let arr1 = deepCopy(arr)