/**
 * Mixin指得是不通过继承的方式，将游离得特征添加到某个类
 */
const Mixin = (base,mixins)=>Object.assign(base.prototype,mixins)
const Fly = {
    fly(){
        console.log("i can fly")
    }
}
class Mammal {
    birth(){
        console.log("i can birth a baby")
    }
}
Mixin(Mammal,Fly)
let dog = new Mammal
dog.birth()
dog.fly()


//Mixin变异版

const FlyMixin=Base=>class extends Base{
    fly(){
        console.log("i can fly")
    }
}

const FlyMammal=FlyMixin(Mammal)
let bat = new FlyMammal
bat.fly()
bat.birth()