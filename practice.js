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
// 10.Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

function myFunction(a) {
  return a.slice(0, -3);
}
/*myFunction('abcdefg')
Expected
'abcd'
myFunction('1234')
Expected
'1'
myFunction('fgedcba')
Expected
'fged'*/
// 11.Write a function that takes two numbers (a and b) as argument. Return b percent of a

function myFunction(a, b) {
  return (b / 100) * a;
}
/*Test Cases:
Attempted: 216714
Solved: 55502
myFunction(100,50)
Expected
50
myFunction(10,1)
Expected
0.1
myFunction(500,25)
Expected
125*/
// 12.Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.
function myFunction(a, b, c, d, e, f) {
  return Math.pow(((a + b - c) * d) / e, f);
}
/*Test Cases:
Attempted: 139135
Solved: 44925
myFunction(6,5,4,3,2,1)
Expected
10.5
myFunction(6,2,1,4,2,3)
Expected
2744
myFunction(2,3,6,4,2,3)
Expected
-8*/
// 13.Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
function myFunction(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}
/*Test Cases:
Attempted: 150244
Solved: 46077
myFunction('cheese', 'cake')
Expected
'cheesecake'
myFunction('lips', 's')
Expected
'slips'
myFunction('Java', 'script')
Expected
'Javascript'
myFunction(' think, therefore I am', 'I')
Expected
'I think, therefore I am'*/
// 14.Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
function myFunction(a) {
  return a % 2 === 0;
}
/*Test Cases:
Attempted: 106485
Solved: 48887
myFunction(10)
Expected
true
myFunction(-4)
Expected
true
myFunction(5)
Expected
false
myFunction(-111)
Expected
false*/
// ??15.Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
function myFunction(a, b) {
  return b.split(a).length - 1;
}
/*Test Cases:
Attempted: 186337
Solved: 39186
myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2
myFunction('h', 'how many times does the character occur in this sentence?')
Expected
4
myFunction('?', 'how many times does the character occur in this sentence?')
Expected
1
myFunction('z', 'how many times does the character occur in this sentence?')
Expected
0*/
// 17.Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
function myFunction(a) {
  return a % 1 === 0;
}
/*Test Cases:
Attempted: 257562
Solved: 71954
myFunction(4)
Expected
true 
myFunction(1.123)
Expected
false 
myFunction(1048)
Expected
true 
myFunction(10.48)
Expected
false */
// 18.Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}
/*Test Cases:
Attempted: 77258
Solved: 44950
myFunction(10, 100)
Expected
0.1
myFunction(90, 45)
Expected
4050
myFunction(8, 20)
Expected
0.4
myFunction(2, 0.5)
Expected
1*/
// 19.Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
function myFunction(a) {
  return Number(a.toFixed(2));
}
/*Test Cases:
Attempted: 155971
Solved: 31168
myFunction(2.12397)
Expected
2.12
myFunction(3.136)
Expected
3.14
myFunction(1.12397)
Expected
1.12
myFunction(26.1379)
Expected
26.14*/
// 20.Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting
function myFunction(a) {
  return a.toString().split("").map(Number);
}
/*Test Cases:
Attempted: 182597
Solved: 32601
myFunction(10)
Expected
[1,0]
myFunction(931)
Expected
[9,3,1]
myFunction(193278)
Expected
[1,9,3,2,7,8]*/
