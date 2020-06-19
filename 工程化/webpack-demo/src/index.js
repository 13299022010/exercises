import _ from 'lodash'
import './style.css'
// import './style1.css'
// //创建两个style标签插入head
// import Google from './google.jpg'
// import Data from './data.xml'
import printMe from './print.js'

import {cube} from './math.js'
import Data from './loader.txt'
// import Md from './mdloader.md'
// console.log(Md,111111111111111)

// function component(){
//     let element = document.createElement('div')
//     let btn = document.createElement('button')
//     //lodash (目前通过一个script脚本引入)对于执行这一行是必须的
//     //lodash现在被引入这个脚本了
//     element.innerHTML = _.join(['hel lo    ','webpack哈aaa喽'],'')
//     element.classList.add('hello')
//     btn.innerHTML = 'Click me and check the console!'
//     let count = 0
//     btn.onclick = ()=>{
//         count++
//         printMe(count)
//     }
//     element.appendChild(btn)

//     // //将图像添加到我们现有的div
//     // let myImg = new Image()
//     // myImg.src = Google

//     // element.appendChild(myImg)
//     // console.log(Data)

//     return element
// }

// // document.body.appendChild(component())
// let element = component()
// document.body.appendChild(element)

// console.log('cube  9',cube(9))

// if(module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('Accepting the    update printMe module!')
//         // printMe()
//         // document.body.removeChild(element)
//         // element = component()
//         // document.appendChild(element)
//     })
// }

if(process.env.NODE_ENV === 'dev'){
    console.log('this is develop env')
}else{
    console.log('this is production env')
}

async function getComponent(){
    
    let element = document.createElement('div')

    const _ = await import(/*webpackChunkName:"lodash"*/'lodash')
    element.innerHTML = _.join(['Hello','world'],' ')

    return element
}

getComponent().then(component=>{
    document.body.appendChild(component)
})
// console.log(Data,'qqqqqqqqqqqqqq')
Data()
