/*Write a program that uses a single asynchronous filesystem operation to read a
  file and print the number of newlines it contains to the console (stdout), 
  similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first command-line 
  argument.

  HINTS
  The solution to this problem is almost the same as the previous problem except
  you must now do it the Node.js way: asynchronous.

  Instead of fs.readFileSync() you will want to use fs.readFile() and instead of
  using the return value of this method you need to collect the value from a 
  callback function that you pass in as the second argument. To learn more about
  callbacks, check out: https://github.com/maxogden/art-of-node#callbacks.

  Remember that idiomatic Node.js callbacks normally have the signature:
  function callback (err, data) {  }

  so you can check if an error occurred by checking whether the first argument 
  is truthy. If there is no error, you should have your Buffer object as the 
  second argument. As with readFileSync(), you can supply 'utf8' as the second 
  argument and put the callback as the third argument and you will get a String 
  instead of a Buffer.

  Documentation on the fs module can be found by pointing your browser here:
  fs docs (https://nodejs.org/api/fs.html) */

/*Use the require function to load Nodes FileSystem module to read a file and 
  determine it's number of lines */
  var fileSystem = require('fs');

  // use the FileSystem readFile function
  // to read from the data.txt file
  fileSystem.readFile('data.txt', 'utf-8', function(err, data){
    if (err) {
      throw err;
    } else{
      // use split function and the \n
      // argument to determine each new 
      // line, & store each as an array item
      var strArray = data.split('\n');
      // display array length, which
      // equals the number of lines
      console.log(strArray.length);
    }
  });

/*NOTE: Windows OS
  Sublime doesn't add a line, so if I is subtracted from length, the 
  result is incorrect

  when using cat data.txt | wc -l, the line count result is incorrect */

// Socket.io - power of node