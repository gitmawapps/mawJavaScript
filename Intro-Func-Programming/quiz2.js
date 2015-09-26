/*
In this quiz, can you list the date of birth of 
each of the musicians inside the gist below */

var musicians = [
  {name: "Louis Armstrong", genre: "Jazz", birthday: "August 4, 1901"},
  {name: "Miles Davis", genre: "Jazz", birthday: "May 26, 1926"},
  {name: "Dizzy Gillespie", genre: "Jazz", birthday: "October 21, 1917" },
  {name: "Michael Jackson", genre: "RnB", birthday: "August 29, 1958"},
  {name: "Mary J Blige", genre: "RnB", birthday: "January 11, 1971"},
  {name: "Katy Perry", genre: "Pop", birthday: "October 25, 1984"},
  {name: "Justin Bieber", genre: "Pop", birthday: "March 1, 1994"}
  ];
  
// Complete the pieces of code below; Use the map function

var birthdays = musicians.map(function(musician){
  return musician.name + ': ' + musician.birthday;
});
console.log(birthdays);
