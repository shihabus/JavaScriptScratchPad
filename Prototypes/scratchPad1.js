function talk(sound){
    console.log(sound);
}
talk('Fluffy');

function talk(){
    // console.log('This->',this)
    console.log('Sound:',this.sound)
}
let animal={
    // talk:talk,
    talk //same as above
}
animal.talk() // Sound: undefined

let dog={
    sound:'woof!'
}
// dog.talk() //TypeError: dog.talk is not a function

// Point prototype of dog to animal object
// So the talk() defined in animal is available for dog Object
Object.setPrototypeOf(dog,animal) // dog.__proto__ ---> animal
dog.talk()  // This-> { sound: 'woof!' }
            // Sound: woof!

let prarieDog={
    howl:function(){
        console.log(this.sound.toUpperCase());
    }
}
// prarieDog.howl(); //TypeError: Cannot read property 'toUpperCase' of undefined
                  // this.sound is undefined

Object.setPrototypeOf(prarieDog,dog);
prarieDog.howl();

// Before changing talk method of Object dog
dog.talk()
animal.talk=function(){
    console.log('I a new talk function')
}
// after changing talk method of Object dog
// dog.talk() is pointing to the same talk() method of animal
// so as the method have changed, the output also changes
dog.talk()


