// constructor function
function Person(saying) {
    this.saying = saying;
}

// adding talk()
Person.prototype.talk = function () {
    console.log('I say: ', this.saying);
}

// creating new Object 'crockford'
var crockford = new Person('Semicolans!!!!!!!');
crockford.talk();

// --- implementation of NEW keyword ---------
function spwan(fn) {
    // 1.create empty object
    var obj = {}

    // 2.point the new Object's prototype to the prototype of the fn(CONSTRUCTOR FUNCTION)
    Object.setPrototypeOf(obj, fn.prototype)

    // 3.Call fn() with new Object as 'this'

    // creating an Array of arguments
    var argsArray = Array.prototype.slice.apply(arguments)
    // arguments[0]=fn  (CONSTRUCTOR FUNCTION)
    var binded = fn.apply(obj, argsArray.slice(1))

    // 4.Return the new Object if the fn() dont have any explicit return
    return binded || obj
}
var shihab=spwan(Person,'Wakanda for ever!!!')
shihab.talk()