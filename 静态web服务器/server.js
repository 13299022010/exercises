let http = require("http")
let rf = require("fs")
let url = require("url")
// let server = new http.Server()

let server = http.createServer((req,res)=>{
    // console.log(req)
    console.log(req.headers)
    res.statusCode = 500
    res.setHeader('Content-Type','text/javaScript;charset=utf-8')
    // res.setHeader('Content-Type','charset=utf-8')
    // res.statusCode = 301
    // res.statusMessage = "baidu"
    // res.setHeader('Location','https://xiedaimala.com/')
    res.write(`<h1>111</h1>`)
    res.end('end')
})
server.listen(3000)
// server.on("request",(request,response)=>{
//     let reqUrl = url.parse(request.url,true)
//     let path =reqUrl.path
//     if(path.indexOf("/index.html")>-1){
//         let html = rf.readFileSync("./index.html","utf-8")
//         response.writeHead(200,{
//             "content-type":"text/html"
//         });
//         response.write(html);
//         response.end();
//     }else{
//         response.writeHead(200,{
//             "content-type":"text/plain"
//         });
//         response.write("hello nodejs");
//         response.end();
//     }  
// })
// server.listen(3000)