// A normal function with sound as an argument
function talk(sound){
    console.log(sound)
}
talk('Woof');

// a function which prints sound 
function talk(){
    console.log(this.sound)
}

// One way to bind object boromior to talk()
let boromior={
    sound:'One shall not simply pass into Mordor',
    speak:talk,
}
boromior.speak()
// The original talk function is still unchanged
talk()

// Other way to bind the boromior to talk()
let talkBoundToBoromior=talk.bind(boromior);
talkBoundToBoromior()
// The original talk function is still unchanged
talk()

// Even when you make a copy of the implicit bound function
// the 'this' key word is deferenced
let copyOfBoromiorSpeak=boromior.speak
copyOfBoromiorSpeak()

// Here we just copy a function, not a method bound to boromior object
let gollum={
    jabber:boromior.speak,
    sound:'My prescious.....'
}
gollum.jabber()

