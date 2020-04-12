/**
 * 闭包是由函数以及创建该函数的词法环境组合而成。这
个环境包含了这个闭包创建时所能访问的所有局部变量

闭包形成原因：函数的作用域链是从声明函数的位置开始计算，而不是调用的位置

js文件执行的过程中，需要先做变量提升，就是将所有变量和函数的声明
全部生成到变量环境中，之所以要做变量提升，是因为js执行之前需要编译
，编译的过程就是将变量和函数的声明放到变量环境中，在执行阶段
js直接去变量环境中查找变量和函数

常用于封装变量
数据暂存

垃圾回收机制：js引擎在当前的执行栈中的内容执行完后，会对内存中
所有的变量进行内存检查，原则是依据引用原则，未被引用的变量视为垃圾，释放内存
查询引用的时候也是通过作用域链依次便利，如果最终追溯到顶层作用域
不是全局（window）的话，就会被回收
 */

 //数据缓存   模块模式
 const cache =(()=>{
    const store = {}
    return {
        get(key){
            return store[key]
        },
        set(key,val){
            store[key] = val
        },
        remove(key){
            delete store[key]
        }
    }
 })()
 console.log(cache)
 
 cache.set("name","dandan")
 
 console.log(cache.get("name"))

 function fn(){
     const store = {}
     function fn1(key){
         return store[key]
     }
     function fn2(key,val){
         store[key]=val
     }
     return {
         get:fn1,
         set:fn2,
         remove:function(key){delete store[key]}
     }
 }

 let cache1 = fn()
 console.log(cache1)
 cache1.set("dog","gou")
 console.log(cache1.get("dog"))
 cache1.remove("dog")
 console.log(cache1.get("dog"))

//变量提升
 function show(){
     console.log(1111)
 }
 show()
 function show(){
     console.log(2222222)
 }
 show()

 //让对象获得私有属性,即对象外部无法访问
 function Obj(){
     let name
     Object.assign(this,{
         setName(newName){
             name = newName
         },
         getName(){
             return name
         }
     })
     function sayHi(){
         console.log("hi")
     }
 }
 
 
 class People{
     constructor(){
         let name
         Object.assign(this,{
            setName(newName){
                name = newName
            },
            getName(){
                return name
            }
        })
     }
     sayHi(){
        console.log("hi"+this.getName())
    }
 }
 let a=new People
 a.setName("aa")
 console.log(a.getName())
 console.log(a.name)
/**
 * 参考课程中的案例，实现一个 People class，模拟私有属性 firstName 和 lastName。

要求：

People自有属性拥有 setFirstName, getFirstName, setLastName, getLastName这四个方法
People.prototype上拥有 getFullName方法
除以上方法外创建的对象不包含其他属性
let p1 = new People()
p1.setFirstName('王')
p1.setLastName('二狗')
p1.firstName         // undefined
p1.lastName // undefined
p1.getFirstName() //'王'
p1.getLastName() // '二狗'
p1.getFullName() // '王 二狗'
 */
 class People1{
     constructor(){
         let firstName,lastName
         this.setFirstName = function(val){
            firstName = val
         }
         this.getFirstName = function(){
             return firstName
         }
         this.setLastName = function(val){
             lastName = val
         }
         this.getLastName = function(){
             return lastName
         }
     }
     getFullName(){
         return this.getFirstName()+this.getLastName()
     }
 }


 /**
  * 
  * 对如下代码进行改装，实现输出0 1 2 3 4

for(var i=0; i<5; i++){
  setTimeout(function(){
    console.log(i)
  }, 0)
}
  */
let arr = []
  for(var i = 0;i<5;i++){
      (function(i){
        let fn = function(){console.log(i)}
        arr.push(fn)
        setTimeout(fn,0)
      }(i))
  }


  /**
   * 写一个函数 orderBy ，实现数组按姓名、年纪、任意字段按照设置对升降序排序

let users = [
  { name: "Bob", age: 20, company: "Baidu" },
  { name: "Cat", age: 18, company: "Alibaba" },
  { name: "Ann", age: 19, company: "Tecent" }
]

console.log( users.sort(orderBy('company', 'asc')) )  // company字段 以升序(从小到大)排序
console.log( users.sort(orderBy('age', 'desc'))  )     //age 字段以降序(从大到小)排序
   */
 function orderBy(key,dir){
     if(dir==="desc"){
        return function(user1,usr2){
            return user1[key] < usr2[key]?1:-1
         }
     }else{
        return function(user1,usr2){
            return user1[key] > usr2[key]?1:-1
         }
     }
     
 }

