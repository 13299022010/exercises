function getDayOfNextYear(){
    let today = Date.now()
    let nextYtDay =today+365*24*3600*1000
    nextYtDay = new Date(nextYtDay)
    let weekth = nextYtDay.getDay()
    switch(weekth){
        case 1:
            weekth = "一"
            break
        case 2:
            weekth = "二"
            break
        case 3:
            weekth = "三"
            break
        case 4:
            weekth = "四"
            break
        case 5:
            weekth = "五"
            break
        case 6:
            weekth = "六"
            break
        default:
            weekth = "日"
    } 
    return "明年的今天是星期"+weekth
}
getDayOfNextYear()