/*
  Write a program that accepts one or more numbers as command-line arguments and 
  prints the sum of those numbers to the console (stdout).

  HINTS
  You can access command-line arguments via the global process object. The 
  process object has an argv property which is an array containing the complete 
  command-line. i.e. process.argv.

  To get started,write a program that simply contains: console.log(process.argv)
  Run it with node program.js and some numbers as arguments. e.g:
  $ node program.js 1 2 3

  In which case the output would be an array looking something like:
  [ 'node', '/path/to/your/program.js', '1', '2', '3' ]

  You'll need to think about how to loop through the number arguments so you can 
  output just their sum. The first element of the process.argv array is always 
  'node', and the second element is always the path to your program.js file, so 
  you need to start at the 3rd element (index 2), adding each item to the total 
  until you reach the end of the array.

  Also be aware that all elements of process.argv are strings and you may need 
  to coerce them into numbers. You can do this by prefixing the property with + 
  or passing it to Number(). e.g. +process.argv[2] or Number(process.argv[2]).*/

// -----------------------------------------------------------------------------
console.log('\nNOTE: process.argv, array contents:\n');

// process.argv returns an array, as demonstrated,
// using the forEach function and console.log to
// show what the array consists of
process.argv.forEach(function(value, index, array) {
  console.log(index + ': ' + value);
});

// Use the reduce function to find the sum
var sumOf = function(array){
  return array.reduce(function(a, b){
    return a + b;
  }, 0);
};

console.log('\nNOTE: Sum of our numbers:');

// The splice function return only our numbers
// Use map to parse each number string to a float
var numbers = process.argv.splice(2).map(function(num){
  return parseFloat(num);
});
console.log(sumOf(numbers));
// node node1.js 1 2 3 -> 6