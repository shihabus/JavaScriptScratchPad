CLASS is a blue print or you can think about it as a template

Prototype is how you performe inheritance in JS
Class and prototypes are highly inter linked
Prototype is similar to a delegate/representative or a reference

Inorder to point Prototype of an object(child_object) to other object(base_object)
Object.setPrototypeOf(child_object,base_object)  
Now all the methods and properties of base_object is available in child_object via child_object.__proto___

This is used to provide default methods and properties to Objects by the creators, so the user can make use of and if they want can even define own their own a new one
