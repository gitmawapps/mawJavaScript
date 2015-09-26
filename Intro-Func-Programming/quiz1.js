/*
In this quiz, you have an array of musicians, can you filter out only
musicians that play the different genres such as Jazz, RnB, and Pop. */
var musicians = [
  {name: "Louis Armstrong", genre: "Jazz"},
  {name: "Miles Davis", genre: "Jazz"},
  {name: "Dizzy Gillespie", genre: "Jazz"},
  {name: "Michael Jackson", genre: "RnB"},
  {name: "Mary J Blige", genre: "RnB"},
  {name: "Katy Perry", genre: "Pop"},
  {name: "Justin Bieber", genre: "Pop"}
  ];
  
// Complete the pieces of code below; Use the filter function

var jazzMusicians = musicians.filter(function(musician){
  return musician.genre === 'Jazz';
});
console.log(jazzMusicians);

var popMusicians = musicians.filter(function(musician){
  return musician.genre === 'Pop';
});
console.log(popMusicians);

var rnbMusicians = musicians.filter(function(musician){
  return musician.genre === 'RnB';
});
console.log(rnbMusicians);