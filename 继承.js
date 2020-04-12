function Mammal(name){//父类
    this.name = name
    this.head = "头"
    this.neck = "颈"
}

Mammal.prototype.birth = function(){
    console.log(this.name+"生了个宝宝")
}

function Human(name){//子类
    Mammal.call(this,name)//继承父类的属性，原理参照new的过程
    this.leg = "2tiao"
}
Human.prototype = Object.create(Mammal.prototype)
//创建一个新对象，使用括号中的对象作为新对象的__proto__，然后让该对象做为子类的prototype对象
Human.prototype.constructor = Human
//构造函数的prototype属性中constructor属性需指向prototype依附的这个构造函数
//这样new出来的对象就知道其构造函数是谁了

/**
 * 
 * 子类通过创建一个新的对象，使对象的__proto__属性指向父类
 * 子类将新对象作为自己的原型对象，这样子类原型和父类原型就
 * 形成了原型链，子类新增方法不会影响父类，但是子类的实例
 * 可以通过原型链继承到父类的方法
 */

Human.prototype.eat = function(){
    console.log(this.name +"拿叉子吃饭")
}

let animal = new Mammal("dog")
let liuliu = new Human("yidan")

animal.birth()
liuliu.birth()
liuliu.eat()