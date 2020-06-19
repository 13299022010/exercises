#!/usr/bin/env node

const weather = require('weatherlhpdd')

let city = process.argv[2]
if(city === '--help'){
    console.log(`
用法：weather <cityname>
示例：weather 北京    
`)
}else{
    weather(city).then(data => {
        console.log(
`城市：${data.results[0].currentCity}
天气：${data.results[0].weather_data[0].date}
${data.results[0].weather_data[0].temperature}
${data.results[0].weather_data[0].wind}
${data.results[0].weather_data[0].weather}`)
    })
}
