/*
Double the inheritance (inheritance * 2)
Get the sum of the inheritance with the values doubled.
Use a combination of techiques you've learned or just a single reduce method */

var godFatherInheritance = [
    { value: 20 },
    { value: 30 },
    { value: 40 }
];

// Double the inheritance using just reduce:
var sum = godFatherInheritance.reduce(function(a, valueObject){
    return a + (valueObject.value * 2);
}, 0);

console.log('sum:', sum);

// This should pass or be true
console.log('sum === 180:', sum === 180);

console.log('\n');
// -----------------------------------------------------------------------------

// Combination of techiques:
// First double inheritance, using map
var timesTwo = godFatherInheritance.map(function(valueObject){
  return valueObject.value * 2;
}, 0);

console.log('timesTwo:', timesTwo);

// Next, find the sum, using reduce
var sum2 = timesTwo.reduce(function(a, b){
  return a + b;
}, 0);

// This should pass or be true
console.log('sum2 === 180:', sum2 == 180);