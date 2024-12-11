// 1.Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
function myFunction(a, b) {
  return a + b;
}
/* Test Cases:
Attempted: 288838
Solved: 163228
myFunction(1,2)
Expected
3
myFunction(1,10)
Expected
11
myFunction(99,1)
Expected
100*/
// 2.Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
function myFunction(a, b) {
  return a === b;
}
/*Test Cases:
  Attempted: 387316
  Solved: 135992
  myFunction(2, 3)
  Expected
  false 
  myFunction(3, 3)
  Expected
  true 
  myFunction(1, '1')
  Expected
  false 
  */
// 3.Write a function that takes a value as argument. Return the type of the value.
function myFunction(a) {
  return typeof a;
}
/*Test Cases:
  Attempted: 276535
  Solved: 125649
  myFunction(1)
  Expected
  'number'
  myFunction(false)
  Expected
  'boolean'
  myFunction({})
  Expected
  'object'
  myFunction(null)
  Expected
  'object'
  myFunction('string')
  Expected
  'string'
  myFunction(['array'])
  Expected
  'object'*/
//  4.Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction(a, n) {
  return a.charAt(n-1);
}
/*Test Cases:
Attempted: 607983
Solved: 98833
myFunction('abcd',1)
Expected
'a'
myFunction('zyxbwpl',5)
Expected
'w'
myFunction('gfedcba',3)
Expected
'e'*/
