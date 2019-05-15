let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound);
    }
}

dog.talk(); // woof

let talkFunction = dog.talk;
// Here the dog.talk is no more a method of Object dog
// It is just a function and now totally disconnected from Object dog
// So it is now similar to:
    // let talkFunction = function(){
    //     console.log(this.sound);
    // }
talkFunction() // undefined 

// To enforce 'this' keyword to bind to Object dog
// This will return you a new function with 'this' keyword bound to dog Object
// So now it is similar to:
    // let boundFunction = function(){
    //     console.log(dog.sound)
    // }
let boundFunction = talkFunction.bind(dog);
boundFunction() // woof

