// function fn (arg){
//     return new Promise((resolve,rejet)=>{
//         if(flag === true){
//             resolve(data)
//         }else{
//             reject(error)
//         }
//     })
// }

// fn(arg).then(function(data){
//     console.log(data)
// }).catch(error){
//     console.log(error)
// }

//使用promise前
const getWeather = (city,onOk,onErr) => {
    let xhr = new XMLHttpRequest()
    let url = 'http://rap2.taobao.org:38080/app/mock/253326/apiTest/getName?city='+city
    xhr.open('GET',url,true)
    xhr.addEventListener('load',function(){
        let res = JSON.parse(xhr.responseText)
        console.log(res)
        if(xhr.status === 200){
            onOk(res)
        }else{
            onErr()
        }
    })
    xhr.addEventListener('error',function(){
        onErr()
    })
    xhr.send()
}

getWeather('beijing',(data)=>{
        console.log(data)
    },
    ()=>{
        console.log("error")
    })

//使用Promise
const getWeather = (city) => {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        let url = 'http://rap2.taobao.org:38080/app/mock/253326/apiTest/getName?city='+city
        xhr.open('GET',url,true)
        xhr.addEventListener('load',function(){
            let res = JSON.parse(xhr.responseText)
            console.log(res)
            if(xhr.status === 200){
                resolve(res)
            }else{
                reject('请求失败')
            }
        })
        xhr.addEventListener('error',function(){
            reject('网络错误')
        })
        xhr.send()
    })
}

getWeather('beijing').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

//复杂案例
function getIp(){
    let promise = new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET',
        'http://rap2.taobao.org:38080/app/mock/253326/getaaa',
        true
        )
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
            }else{
                reject('请求ip失败')
            }
        }
        xhr.onerror= ()=>{
            reject('网络ip错误')
        }
        xhr.send()
    })
    return promise
}

const getCityFromIp = ip => {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET',
        `http://rap2.taobao.org:38080/app/mock/253326/getCityFromIp?ip=${ip}`,
        true
        )
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
            }else{
                reject('请求city失败')
            }
        }
        xhr.onerror= ()=>{
            reject('网络错误city')
        }
        xhr.send()
    })
}

const getWeatherByCity = city =>  new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET',
        `http://rap2.taobao.org:38080/app/mock/253326/getWeather?city=${city}`,
        true
        )
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
            }else{
                reject('请求weather失败')
            }
        }
        xhr.onerror= ()=>{
            reject('weather')
        }
        xhr.send()
    })


getIp()
.then(data=> getCityFromIp(data.ip))
.then(data=> getWeatherByCity(data.city))
.then(data=> console.log(data))
.finally(() => console.log('不管成功失败，都会执行'))
.catch(err=>{
    console.log(err)
})

/**
 * promise.prototype.then
 * promise.prototype.catch
 * promise.prototype.finally
 * Promise.all
 * Promise.race
 * Promise.reject
 * Promise.resolve
 */
let a1 = getWeatherByCity('北京')
 let a2 = getWeatherByCity('西安')
 let a3 = getWeatherByCity('上海')

 Promise.all([a1,a2,a3]).then(data => console.log(data))
 //Promise.all等所有接口数据都返回之后一起返回
 
 Promise.race(a1,a2,a3).then(data => console.log(data))

 //async await是一种语法糖

 async function start(){
    let a = await getWeatherByCity('shanghai')
    console.log(a)
    let time = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('2222')
            resolve(111)
        },1000)
    })
    console.log(time)
    let b = await getWeatherByCity('beijing')
    console.log(b)
 }
 start()