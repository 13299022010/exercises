const http = require('http')
const url = require('url')
http.createServer((req,res)=>{
    let urlObj = url.parse(req.url,true)
    if(urlObj.pathname === '/getWeather'){
        let data = { city:'xian',weather:'sunny'}
        res.end(`${urlObj.query.callback}(${JSON.stringify(data)})`)
    }else{
        res.writeHead(404,'not found')
        res.end('not found')
    }
}).listen(9999)

/**
 * function showData(data){
    console.log(data)
}
</script>
<script src="http://127.0.0.1:9999/getWeather?callback=showData"></script>
 */