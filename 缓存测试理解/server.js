const http = require('http')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

http.createServer((req,res) => {
    // console.log(req.url)
    let filePath = path.join(__dirname, req.url)
    fs.readFile(filePath, (err,data) => {
        if (err) {
            res.writeHead(404,'not found')
            res.end('404  Oh, not found')
        } else {
            //Expires example
            // res.setHeader('Expires','Thu, 30 Apr 2020 06:05:49 GMT')
            
            //example2 优先级最高
            // res.setHeader('Pragma','no-cache')

            //example3
            // res.setHeader('Expires','Thu, 30 Apr 2020 06:12:49 GMT')
            // res.setHeader('Pragma','no-cache')

            //example4
            // res.setHeader('Expires',`${new Date(Date.now() + 1000*5).toGMTString()}`)


            //Cache-Control
            res.setHeader('Cache-Control','max-age=10') 

            //example2  no-cache表示服务端返回的内容都在浏览器本地缓存，
            //但是不使用，每次请求还是先去服务器请求
            // res.setHeader('Cache-Control','no-cache')
            
            //example3  no-store表示的是服务端返回的内容不进行本地以及代理的缓存
            //必须重新向服务端请求新的数据
            // res.setHeader('Cache-Control','no-store')
            



            //Last-Modified
            //获取文件的相关信息中mtime，mtime表示的是文件上次修改时间
            // let mtime = Date.parse(fs.statSync(filePath).mtime)
            // res.setHeader('Cache-Control','no-cache')
            // //10秒内，浏览器直接从本地拿资源，10秒后找服务器要，如果没有修改，告诉浏览器
            // // res.setHeader('Cache-Control','max-age=10') 

            // if(!req.headers['if-modified-since']){
            //     res.setHeader('Last-Modified',new Date(mtime).toGMTString())
            //     res.writeHead(200,'ok')
            //     res.end(data)
            // }else{
            //     let oldMtime = Date.parse(req.headers['if-modified-since'])
            //     if(mtime > oldMtime) {
            //         res.setHeader('Last-Modified', new Date(mtime).toGMTString())
            //         res.writeHead(200,'ok')
            //         res.end(data)
            //     }else{
            //         res.writeHead(304)
            //         res.end()
            //     }
            // }




            //Etag
            let md5 = crypto.createHash('md5')
            let oldEtag = req.headers['if-none-match']
            console.log(oldEtag)
            //生成的md5值表示文件只要被修改了内容，这个值就会发生变化
            if(!oldEtag){
                res.setHeader('Etag', md5.update(data).digest('base64'))
                res.writeHead(200,'ok')
                res.end(data)
            }else{
                let newTag = md5.update(data).digest('base64')
                console.log(oldEtag,newTag)
                if(oldEtag !== newTag) {
                    res.setHeader('Etag', newTag)
                    res.writeHead(200,'ok')
                    res.end(data)
                }else{
                    res.writeHead(304)
                    res.end()
                }
            }
        }
    })
}).listen(8080)
