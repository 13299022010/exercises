const fs = require('fs')

fs.readFile('./test.txt','utf-8',(err,data)=> {
    if(err) throw err
    let tmp = data.toLocaleUpperCase()
    console.log(tmp)

    fs.writeFile('./test-put.txt', tmp, err => {
        if(err) throw err
        console.log('success write')
    })
})