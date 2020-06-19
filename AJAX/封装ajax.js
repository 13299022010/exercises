//封装get
const request = (url,params,onsuccess,onerror) => {
    let xhr = new XMLHttpRequest()
    url = `${url}?${Object.entries(params).map(arr=>arr[0]+'='+arr[1]).join('&')}`
    xhr.open("GET",url,true)
    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
            onsuccess(JSON.parse(xhr.responseText))
        }else{
            onerror()
        }
    }
    xhr.onerror = onerror
    xhr.send()
}

request('http://rap2api.taobao.org/app/mock/244238/weather', {city: '杭州'},
    data => {
        console.log(data)
    },
    ()=>{
        console.log('请求出错了')
    }
)
