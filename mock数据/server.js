const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req,res) => {
    let pathObj = url.parse(req.url, true)
    console.log(pathObj)
    switch(pathObj.pathname){
        case '/getWeather':
            if(pathObj.query.city === 'beijing')
                res.end(JSON.stringify({city:'bejing',weather:'sunny'}))
            else
                res.end(JSON.stringify({city:pathObj.query.city,weather:'unknow'}))
        default:
            try{
                
                let pathname = pathObj.pathname === '/'?'/index.html': pathObj.pathname
                console.log(__dirname + pathname)
                res.end(fs.readFileSync(__dirname + pathname))
            }catch(e){
                res.writeHead(404,'Not Found')
                res.end('<h1>404 Not Found </h1>')
            }
    }   
}).listen(8888)