const jsonpOld = function(url,data={},callback){
    window.__fn__ = data => callback(data)
    let script = document.createElement('script')
    let query = Object.entries(data).map(a => `${a[0]}=${a[1]}`.join('&'))
    script.src = url + '?callback=__fn__&'+query
    script.onerror = () => console.log('加载失败')
    document.head.appendChild(script)
    document.head.removeChild(script)
}
jsonpOld('http://127.0.0.1:9999/getWeather',{},data=>console.log(data))

const jsonp = (url,data = {})=>{
    return new Promise((resolve,reject) => {
        window.__fn__ = data => resolve(data)//全局绑定一个函数，让它调用resolve方法驱动后面的数据处理
        let script = document.createElement('script')
        let query = Object.entries(data).map(a => `${a[0]}=${a[1]}`.join('&'))
        script.src = url + '?callback=__fn__&'+query
        script.onerror = () => reject('加载失败')
        document.head.appendChild(script)
        document.head.removeChild(script)
    })
}

jsonp('http://127.0.0.1:9999/getWeather')
.then(data => console.log('back',data))
.catch(e => console.log(e))