// Prototypes are on Functions
// So when we use new keyword it give us Object
// and they can be used as CONSTRUCTOR FUNCTIONS

// __proto__ is on Objects and have the prototype references

let cat={
    breed:'muffckin'
}
let myCat={
    name:'Fluffykin'
}
Object.setPrototypeOf(myCat,cat)
console.log(myCat.__proto__) //{ breed: 'muffckin' }

myCat.__proto__.family="mammal"
console.log(cat) //{ breed: 'muffckin', family: 'mammal' }

function Dog(){}
Dog.prototype.breed="bulldog"

let myDog=new Dog()
console.log(myDog.__proto__) //Dog { breed: 'bulldog' }

console.log(Dog.__proto__) //[Function]
console.log(Dog.prototype) // Dog { breed: 'bulldog' }

myDog.__proto__.name='Scooby'
console.log(Dog.prototype) // Dog { breed: 'bulldog', name: 'Scooby' }

console.log(myDog.prototype) //undefined

