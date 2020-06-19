const axios = require('axios')

function getWeather(city){
    return new Promise((resolve,reject)=> {
        axios.get(`http://api.jirengu.com/getWeather.php?city=${encodeURI(city)}`)
            .then(response => {
                // handle success
                resolve(response.data)
            })
            .catch(error=> {
                // handle error
                console.log(error);
                reject('网络异常')
            })
        })
}
module.exports = getWeather