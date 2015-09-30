/*  Write a program that uses a single synchronous filesystem operation to read a 
  file & print the number of newlines (\n) it contains to the console (stdout), 
  similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first command-line 
  argument. You do not need to make your own test file.

  HINTS
  To perform a filesystem operation you are going to need the fs module from the 
  Node core library. To load this kind of module, or any other "global" module, 
  use the following incantation:

  var fs = require('fs')
  Now you have the full fs module available in a variable named fs.

  All synchronous (blocking) filesystem methods in the fs module end with 'Sync'
  To read a file,you'll need to use fs.readFileSync('/path/to/file').This method
  will return a Buffer object containing the complete contents of the file.

  Documentation on the fs module can be found by pointing your browser here:
  fs.readFile
  (https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)

  Buffer objects are Node's way of efficiently representing arbitrary arrays of 
  data, whether it be ascii, binary or some other format. Buffer objects can be 
  converted to strings by simply calling the toString() method on them. e.g.

  var str = buf.toString()

  Documentation on Buffers can be found by pointing your browser here:
  Buffer (https://nodejs.org/api/buffer.html#buffer_buffer)

  If you're looking for an easy way to count the number of newlines in a string,
  recall that a JavaScript String can be .split() into an array of substrings &
  that '\n' can be used as a delimiter. Note that the test file does not have a 
  newline character ('\n') at the end of the last line, so using this method 
  we end up with an array that has one more element than number of newlines.*/

  // Use the require function to load 
  // Nodes FileSystem module to read a file 
  // and determine the number of lines 
  var fileSystem = require('fs');

  // use the FileSystem readFileSync function
  // to read from the data.txt file
  var content = fileSystem.readFileSync('data.txt', 'utf-8');

  // use split function and the \n
  // argument to determine each new 
  // line, & store each as an array item
  var strArray = content.split('\n');

  // display array length, which
  // equals the number of lines
  console.log(strArray.length);

  /*NOTE: Windows OS
    Sublime doesn't add a line, so if I is subtracted from length, the 
    result is incorrect

    when using cat data.txt | wc -l, the line count result is incorrect */