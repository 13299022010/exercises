/**
 * 
 * promise接收一个函数，该函数有两个参数，这两个参数应该
 * 是promise定义好的参数，用于切换peomise的状态
 * promise还应该有then方法，该方法用于绑定失败和成功传输的数据
 * promise有三种状态，初始等待Pending，成功Fulfilled，拒绝rejected 
 */
function PromiseEasy(fn){
    this.state = 'pending'
    this.succeed = null
    this.fail = null
    //将resolve和reject的this指向新对象
    fn(this.resolve.bind(this),this.reject.bind(this))
}
PromiseEasy.prototype.resolve = function(data){
    //声明的时候this指向window
    setTimeout(()=>{
        this.state = 'fulfilled'
        this.succeed(data)
    })
}
PromiseEasy.prototype.reject = function(err){
    setTimeout(()=>{
        this.state = 'rejected'
        this.fail(err)
    })
}
PromiseEasy.prototype.then = function(succeed,fail){
    this.succeed = succeed
    this.fail = fail
}    

const getWeatherByCity = city =>  new PromiseEasy((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET',
        `http://rap2.taobao.org:38080/app/mock/253326/getWeather?city=${city}`,
        true
        )
        xhr.onload = ()=>{
            if(xhr.status === 200){
                let text = JSON.parse(xhr.responseText)
                resolve(text)
            }else{
                reject('请求weather失败')
            }
        }
        xhr.onerror= ()=>{
            reject('weather')
        }
        xhr.send()
    })

    getWeatherByCity('北京')
        .then(data => {
            console.log(data)
        },err=>console.log(err))