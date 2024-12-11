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
  return a.charAt(n - 1);
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
// 5.Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
function myFunction(a) {
  return a.slice(3);
}
/*Test Cases:
Attempted: 265453
Solved: 83240
myFunction('abcdefg')
Expected
'defg'
myFunction('1234')
Expected
'4'
myFunction('fgedcba')
Expected
'dcba'*/
// 6.Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
function myFunction(str) {
  return str.slice(-3);
}
/*Test Cases:
Attempted: 260165
Solved: 90349
myFunction('abcdefg')
Expected
'efg'
myFunction('1234')
Expected
'234'
myFunction('fgedcba')
Expected
'cba'*/
// 7.Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
function myFunction(a) {
  return a.slice(0, 3);
}
/*Test Cases:
Attempted: 197111
Solved: 78049
myFunction('abcdefg')
Expected
'abc'
myFunction('1234')
Expected
'123'
myFunction('fgedcba')
Expected
'fge'*/
// 8. Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
function myFunction(a) {
  return a.indexOf("is");
}
/*Test Cases:
Attempted: 110704
Solved: 49685
myFunction("praise")
Expected
3
myFunction("risky")
Expected
1
myFunction("paris")
Expected
3*/
// 9.Write a function that takes a string (a) as argument. Extract the first half a. Return the result
function myFunction(a) {
  const halfLength = Math.floor(a.length / 2);
  return a.slice(0, halfLength);
}
/*Test Cases:
Attempted: 184932
Solved: 61656
myFunction('abcdefgh')
Expected
'abcd'
myFunction('1234')
Expected
'12'
myFunction('gedcba')
Expected
'ged'*/
// 10.
