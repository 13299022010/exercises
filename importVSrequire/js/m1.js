const obj = require('./m3')

console.log(obj.a)
obj.aplus()
console.log(obj.a)
obj.a = {}
console.log(obj.a)

// import {a,aplus} from './m3'

// console.log(a)
// aplus()
// console.log(a)
//a={}会报错，只读引用