class Mammal {
    constructor(sound) {
        this.sound = sound
    }

    talk() {
        return this.sound
    }
}
class Dog extends Mammal{
    constructor(){
        super('Bow bow...')
    }
}
let fluffykins = new Mammal('Meow');
fluffykins
let speak = fluffykins.talk()
console.log(speak)

let scooby=new Dog()
let master=scooby.talk()
console.log(master)