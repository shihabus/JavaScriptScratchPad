let cat={
    // constructor of the Object
    init:function(sound){
        this.sound=sound
    },
    makeSound:function(){
        console.log(this.sound)
    }
}
// Crete a new Object with its prototype set as another Object, 
// here cat
let fluffykin=Object.create(cat);
fluffykin.sound='Meoow'
fluffykin.makeSound()
console.log(`Is cat is prototype of fluffykin 
${cat.isPrototypeOf(fluffykin)}`)

// implementation
function objectCreate(proto){
    const obj={}
    Object.setPrototypeOf(obj,proto)
    return obj
}

let kitty=objectCreate(cat)
kitty.sound='Yeah'
kitty.makeSound()

let tom=Object.create(cat)
// using init as constructor
tom.init('Jerry....')
tom.makeSound()