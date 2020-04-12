function getLeftTime(){
    let ydTime = new Date("2021-1-1 00:00:00")
    let leftTime = ydTime.getTime() - Date.now()
    console.log(leftTime)
    let day = Math.floor(leftTime / (24*3600*1000))
    leftTime =leftTime%(24*3600*1000)
    let hour = Math.floor(leftTime / (3600*1000))
    leftTime =leftTime%(3600*1000)
    let minute = Math.floor(leftTime / (60*1000))
    leftTime =leftTime%(60*1000)
    let second = Math.floor(leftTime / 1000)
    return {day,hour,minute,second}
}