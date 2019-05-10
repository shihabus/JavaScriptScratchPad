Here we are talking about object creation in JavaScript.

The 'this' keyword actually points to where the function is being called (call site) rather than
where the function  is actually defined.

'bind' keyword is used inorder to enforce 'this' to a certain object
function.bind(object,thisArg....);
bind gives you a new function and you have to call it explicitly