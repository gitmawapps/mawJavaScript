/*Use the require function to load Nodes FileSystem module to read a file and 
  determine it's number of lines */
  var fileSystem = require('fs');

  // use the FileSystem readFile function
  // to read from the data.txt file
  fileSystem.readFile('data.txt', function(err, data){
    if (err) {
      throw err;
    };

    var buffer = data;

    // change buffer to string format
    var str = buffer.toString();

    // use split function and the \n
    // argument to determine each new 
    // line, & store each as an array item
    var strArray = str.split('\n');

    // display array length, which
    // equals the number of lines
    console.log(strArray.length);
  });

/*NOTE: Windows OS
  Sublime doesn't add a line, so if I is subtracted from length, the 
  result is incorrect

  when using cat data.txt | wc -l, the line count result is incorrect */