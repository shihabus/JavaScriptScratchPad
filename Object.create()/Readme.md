Object.create() creates a new Object with the prototype set to another Object.
Better approach that setting prototype explicitly and function constructor with 'new' keyword. New using Object.setPrototypeOf() there is considerable performance issues.
