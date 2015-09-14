/* Q21 - Code Quiz -------------------------------------------------------------
 What will the code below output to the console? 
 Why?  */
var Human = { // object
  name: "Jerry", // name mapped to "Jerry"
  printName: function() { // printName mapped to anonymous function  
    var self = this; // keyword, refers to current object
    console.log("outer func:  this.name = " + this.name);
    console.log("outer func:  self.name = " + self.name);
    (function() {
        console.log("inner func:  this.name = " + this.name);
        console.log("inner func:  self.name = " + self.name);
    }()); // anonymous inner function end
  } // anonymous function end
};
Human.printName();
/* Prints: 
  outer func:  this.name = Jerry
  outer func:  self.name = Jerry
  inner func:  this.name = 
  inner func:  self.name = Jerry
  Above we have an object assigned to variable Human
    it has a property key name and value "Jerry"
    it has a property printName and value anonymous function
      anonymous function logs this.name and self.name
      the anonymous function has an anonymous inner function
        the anonymous inner function logs this.name and self.name
        but the inner function loses access to this
        however, when it uses self, it has access to the value of self
        because of the closure concept, which says that the inner function
        has access to all variables in it's parent scope
  this: each function has it's own this keyword, so it loses access to the parents this */

/* Q22 - String Quiz -----------------------------------------------------------
  Design a function that takes a string str and 
  returns the string in a reversed order.
  For example:
  Input => "Hi there"
  Expected output => "ereht iH"
  See the gist for some starter code */
//console.clear();
function reverseString(str){  
  // 
  var reversedString = [];
  for (var i = str.length-1; i >= 0; i--) {
    reversedString.push(str[i]);
  };  
  str = reversedString.join(''); // join() returns a string
  return str;  
}
function reverseStringV2(str){  
  // type your code here
  var reversedString = [];
  for (var i = 0; i < str.length; i++) {
    reversedString.push(str[(str.length-1) - i]);
  };  
  str = reversedString.join('');
  return str;  
}
// NOTE: Your code is correct if the output from console.log() is true
console.log(reverseString("Hi there") === "ereht iH");
console.log(reverseStringV2("Hi there") === "ereht iH");

/* Q23 - String Quiz -----------------------------------------------------------
  Design a javascript function such that the first letters in each of the words 
  is capitalized.
  Input => "hello world" and Output => "Hello World"
  Hints: You may have to use the following methods: split(), splice(), toUpperCase() */
//console.clear();

// Capitalize first letter of each word,
// but a new array has been used
function capitalizeLetters(str) {
  var wordArray = []; 
  var splitStr = str.split(' '); // split returns an array

  for (var i = 0; i < splitStr.length; i++) {
    var splitWord = splitStr[i].split(''); // split returns an array of letters
      splitWord.splice(0, 1, splitWord[0].toUpperCase());//replace letter 1:caps
      splitWord = splitWord.join(''); // turns array to string
    wordArray.push(splitWord);
  };
  str = wordArray.join(' ');
  return str; 
}

// Capitalize first letter of each word,
// no new arrays used, but trim() used
function capitalizeLetters1 (str) {
  var splitStr = str.split(' '); // split returns an array
  str = ''; // reset str to empty string

  for (var i = 0; i < splitStr.length; i++) {
    var splitWord = splitStr[i].split(''); // split returns an array of letters
      splitWord.splice(0, 1, splitWord[0].toUpperCase());//replace letter 1:caps
      splitWord = splitWord.join(''); // turns array to string
    str += splitWord + ' '; // white space trimmed at return
  };
  return str.trim(); // trim white space
}

// Capitalize first letter of each word, no new arrays used
function capitalizeLetters1(str) {
  // split the string where an empty space is found
  var splitStr = str.split(' '); // split returns an array

  // reset str to empty string
  str = '';

  // iterate over the splitStr array
  for (var i=0; i < splitStr.length; i++) {

    // capitilize first letter, and store in new variable
    var word = splitStr[i][0].toUpperCase();

    // remove position 1 letter, concatenate rest of the word
    word += splitStr[i].substring(1);

    // add a space after each word, except
    // the last word, since the loop ends there
    if (str !== '') {
      str += ' ';
    }

    // concatenate each word
    str += word;
  }

  return str;
}
// NOTE: -> for you to know whether you've written the right code, the log below
// should be true.
console.log(capitalizeLetters("hi there") === "Hi There");

/* Q24 - String Quiz -----------------------------------------------------------
   In this quiz, design a function that can be used to count the number of 
   vowels there are in a string.
   For example: Input "Hi there" --> 3
   This means that in the string above there are three vowels.
   WHAT ARE VOWELS?
   They are a e i o u (at least in the English language)
   See gist below for starter code.
*/
//console.clear();
function vowelCount(str){
  // HINT: split string into an array
  var tokenizedStringArray = str.split(' '); // split by space    
  // HINT: set vowel count
  var vowelCount = 0;  
  // YOUR CODE can go here
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      vowelCount++;
    };
  };    
  return vowelCount;
}
// This is a handy function that can be used
// to establish whether a character is a vowel
function isVowel(vowel){
    var vowels = ["a", "e", "i", "o", "u"];
    isTrue = false;
    for (var i=0; i < vowels.length; i++){
        if (vowel === vowels[i]){            
            isTrue = true;
            break;
        }
    }
    return isTrue;
}
// the answer here should be true if you write code right
console.log(vowelCount("Hi there") === 3);

/* Q25 - String Quiz -----------------------------------------------------------
 Design a function numberEncoding(str) that takes the str parameter and encodes 
 the message according to the following rule:
 Encode every letter into its corresponding numbered position in the alphabet.
 Symbols and spaces will also be used in the input.
 For example: if str is "af5c a#!" then your program should return 1653 1#!.
*/
//console.clear();
function numberEncoding(str){
  var alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l',
   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
   17, 18, 19, 20, 21, 22, 23, 24, 25];
  var symArray = [' ', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*',
  '(', ')', '-', '_', '=', '+', ',', ',', '.', '/', '<', '>', '?', ';', 
  '"', ':', '[', ']', '{', '}', '\\', '|', "'"];

  // split str
  var splitStr = str.split('');
  var encodedArray = [];

  // 
  for (var i = 0; i < splitStr.length; i++) {
    for (var j = 0; j < alphaArray.length; j++) {

      // if splitStr item is a letter, push
      // corresponding numbered position to encodedArray
      if (splitStr[i] === alphaArray[j]) {
        encodedArray.push(numArray[j]);

        // if item is a whole number and item is not = to the
        // current item in encodedArray, push it to encodedArray
      } else if (splitStr[i] >= 0 && splitStr[i] !== encodedArray[i]) {
        encodedArray.push(splitStr[i]);

        // if item is not = to the current item in 
        // encodedArray, iterate over symArray 
      } else if (splitStr[i] !== encodedArray[i]) {
        for (var k = 0; k < symArray.length; k++) {

          // if item is a symbol or space,
          // push it to encodedArray 
          if (splitStr[i] === symArray[k]) {
            encodedArray.push(splitStr[i]);
          };
        };
      }
    };
  };

  // join() turns array to string 
  str = encodedArray.join('');
  return str;
}
console.log(numberEncoding('33af5c \'\'#'));
// Ensure that when you run this code, the value below that is out is `true`
console.log(numberEncoding('33af5c') === '331653');

/* 26 - Array Quiz -------------------------------------------------------------
 Design a function arrayAddition(arr) that takes an array of numbers stored in 
 arr and return the string true if any combination of numbers in the array can
 be added up to equal the largest number in the array, otherwise return the 
 string false.
 For example: if arr contains [4, 6, 23, 10, 1, 3]
 the output should return true because 4 + 6 + 10 + 3 = 23. 
 The array will not be empty, will not contain all the same elements, 
 and may contain negative numbers.
*/
//console.clear();
function arrayAddition(arr){
  //HINTS: sort array
  arr.sort(function(a, b){
      return a - b
  });

  // get the largest out
  var largest = arr.pop();
  var sum = 0;

  for (var i = arr.length-1; i >= 0; i--) {

    // calculate if sum is less than largest
    if(sum + arr[i] < largest) {
      sum += arr[i];
      console.log('sum:', sum, 'arr[i]:', arr[i]);
    }

    // calculate if sum equals largest
    else if(sum + arr[i] === largest) {
      sum += arr[i];

      // show each stage of calculation
      console.log('sum:', sum, 'arr[i]:', arr[i]);
      
      return true;
    }
  };
}
// TODO this should pass i.e. be true
console.log(arrayAddition([4, 6, 23, 10, 1, 3, 5, 45]) === true)
