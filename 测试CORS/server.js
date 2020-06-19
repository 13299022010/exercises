const http = require('http')
const url = require('url')
const origins = ['http://js.jirengu.com','https://www.baidu.com']
http.createServer((req,res)=>{
    let urlObj = url.parse(req.url,true)
    let reqOrigin = req.headers.origin
    if(urlObj.pathname === '/getWeather'){
        let index = origins.indexOf(reqOrigin)
        if(index>-1){
            res.setHeader('Access-Control-Allow-Origin',origins[index])
            res.end(JSON.stringify({weather:"晴",city:'西安'}))
        }
    }else{
        res.writeHead(404,'not found')
        res.end('not found')
    }
}).listen(9999)

//fetch("http://127.0.0.1:9999/getWeather").then(res=>res.json()).then(data=>console.log(data))