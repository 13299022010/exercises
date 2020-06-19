const weather = require('weatherlhpdd')

weather('上海').then(data => {
    console.log(data)
}).catch(err=>{
    console.log(err)
})