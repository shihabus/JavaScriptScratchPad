Implicit coercion:


**Primitives**

1.to STRING:

  Implicit coercion to string is triggered by the binary __+__ operator, when any operand is a string.

2.to BOOLEAN:

Implicit conversion happens in logical context, or is triggered by logical operators ( || && !).

__Note__: Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, 
even if they are not boolean. 

x||y return x. 

x&&y return y. 

Boolean('')           // false

Boolean(0)            // false 

Boolean(-0)           // false

Boolean(NaN)          // false

Boolean(null)         // false

Boolean(undefined)    // false

Boolean(false)        // false

Boolean({})             // true

Boolean([])             // true

Boolean(Symbol())       // true

!!Symbol()              // true

Boolean(function() {})  // true

3.to NUMBER:

Implicit conversion is tricky, because it’s triggered in more cases:

* comparison operators (>, <, <=,>=)

* bitwise operators ( | & ^ ~)

* arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.

* unary + operator

* loose equality operator == (incl. !=). 

**Note** that == does not trigger numeric conversion when both operands are strings.

__There are two special rules to remember:__

1. When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.

2. NaN does not equal to anything even itself.

