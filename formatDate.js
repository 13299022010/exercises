function formatDate(str){
    let lastTime = new Date(str)
    let during =Math.abs( Date.now() - lastTime.getTime())/1000
    switch(true){
        case during<60:
            return "刚刚"
        case during<3600:
            return `${Math.floor(during/60)}分钟前`
        case during<24*3600:
            return `${Math.floor(during/3600)}小时前`
        default: 
            return `${Math.floor(during/24*3600)}天前`
    }
}