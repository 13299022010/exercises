function randomStr(n){
    let libary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_"
    let resStr = ""
    for(let i = 0 ;i<n;i++){
        resStr+= libary[parseInt(Math.random()*63)]
    }
    return resStr
}

function randomNum(min,max){
    if(min>max){
        let tmp = max
        max=min
        min=tmp
    }
    let num = Math.round(Math.random()*(max-min))+min
    return num
}