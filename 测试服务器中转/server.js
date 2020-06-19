/**
 * 服务器中转就是自己用自己的服务器去向其他域名的服务器
 * 发起请求，因为跨域是因为浏览器的同源策略限制，服务器
 * 之间互相请求没有限制
 */

const http = require('http')
const url = require('url')

http.createServer((req,res)=>{
    let urlObj = url.parse(req.url,true)
    if(urlObj.pathname === '/bridge'){
        http.get(urlObj.query.url,req => {
            let text = ''
            req.on('data', data => text+=data)
            req.on('end',()=>{
                res.setHeader('Access-Control-Allow-Origin','*')
                res.end(text)
            })
        })
    }else{
        res.writeHead(404,'not found')
        res.end('not found')
    }
}).listen(9999)

//fetch('http://127.0.0.1:9999/bridge?url='+encodeURIComponent('http://www.baidu.com')).then(res=>console.log(res))