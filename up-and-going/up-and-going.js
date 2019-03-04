// Operators ==========================

/*
Operators perform actions on variables
Operators include:

The equals Operator is for assignment. First calculate the value on the right hand side of the Operator ( source value ) and put that value into the variable that is specified on the left hand side of the assignment Operator ( target variable ).

Assignment Operator
===================
Example: = ( as in = 2 )

Math Operator
=============
+ ( addition )
- ( substraction )
* ( multiplication )
/ ( division )
Example: * ( as in * 3 )

Compound Operator
=================
+=, -=, *=, /= are compound Operators that combine a math operation with an assignment
Example: a += 2 ( similar to a = 2 + 2 )

Increment / decrement Operator
++, --
Example: a++ ( similar to a = a + 1 )

Object Property Access Operator
======================
.
Example: console.log

What is an Object?
Object are values that holds other values at specific named locations called Properties
obj.a means an object called 'obj' with a Property called 'a'.
Properties can also be accessed by: obj['a']

Equality Operator
=================
== ( loose equals )
=== ( strict equals )
!== ( loose not-equals )
!=== ( strict not-equals )
Example: one === 1 //false

Comparison Operator
===================
< ( less than )
> ( greater than )
<= ( less than or loose equals )
>= ( greater than or loose equals )
Example: a <= b

Logical Operator
================
&& ( and )
|| ( or )
Example: a || b ( this says 'a or b' )
*/


// Values & Types ==========================

/*
When you do math, you need a 'number'

When you print to the screen, you need a 'string'

When you need to make a decision in the program, you need a 'boolean'

Values that are included directly in the code are called 'literals'

Coercion
========

explicit coercion
Example: Number() - a built in function that converts the value sent to the function into a number

implicit coercion
Example: Compare 99.99 to '99.99'
'99.99' == 99   // this will convert the left hand side of the equality Operator loosely making it 99.99 == 99.99
implicit coercion is worth learning and not feared as a negative part of JavaScript
