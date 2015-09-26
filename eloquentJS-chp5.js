/*
Higher-Order Function Exercises:
  http://eloquentjavascript.net/05_higher_order.html#h_TcUD2vzyMe

  Solutions by Mark Daniels (gitmawapps) */

/*
Flattening: --------------------------------------------------------------------
  http://eloquentjavascript.net/05_higher_order.html#h_aIOczlLyX1

  Use reduce method in combination with the concat method to "flatten" an array
  of arrays into a single array that has all the elements of the input arrays.*/
  var arrays = [[1, 2, 3], [4, 5], [6]];
  var reduce = function(collection, callback, start){
    var current = start;
    for (var i = 0; i < collection.length; i++) {
      current = callback(current, collection[i]);
    }
    return current;
  };
  var flattening = reduce(arrays, function(a, b){
    return a.concat(b);
  }, []);
  console.log('Flattening:', flattening); // → [1, 2, 3, 4, 5, 6]
  console.log('\n'); // new line
/*
Mother-child age difference: ---------------------------------------------------
  http://eloquentjavascript.net/05_higher_order.html#h_I9XoVSLsTV

  Using the example data set from this chapter, compute the average age 
  difference between mothers and children (the age of the mother when the child 
  is born). You can use the average function defined earlier in this chapter.

  Note that not all the mothers mentioned in the data are themselves present in 
  the array. The byName object, which makes it easy to find a person's object 
  from their name, might be useful here. */

  // JSON: http://eloquentjavascript.net/code/ancestry.js
  var ANCESTRY_FILE = "[\n  " + [
    '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
    '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
    '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
    '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
    '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
    '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
    '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
    '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
    '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
    '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
    '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
    '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
    '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
    '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
    '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
    '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
    '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
    '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
    '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
    '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
    '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
    '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
    '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
    '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
    '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
    '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
    '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
    '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
    '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
    '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
    '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
    '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
    '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
    '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
    '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
    '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
    '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
    '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
    '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
  ].join(",\n  ") + "\n]";

  // Parsed JSON
  var ancestry = JSON.parse(ANCESTRY_FILE);

  // Given function
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  // Given object
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

  // EACH (returns nothing, has side-effects):
  var each = function(collection, callback){
    // Make sure callback is a function,
    // Determine which loop to use
    // for iterating over collection
    if (typeof callback === 'function') {
      if (Array.isArray(collection)) {
        // use the for loop, for arrays
        for (var i = 0; i < collection.length; i++) {
          // invoke callback function
          // on each array item
          callback(collection[i]);
        }
      }
      // use the for in loop, for objects
      else {
        for(var key in collection){
          // invoke callback function
          // on each object key
          callback(collection[key]);
        }
      }
    }
  };

  // FILTER (returns an array of transformed items):
  var filter = function(collection, callback){
    var transformedArray = [];
    // use each() to iterate over collection
    // and invoke callback on each item
    each(collection, function(value){
      // determine if callback returns true,
      // and push to transformedArray
      if (callback(value)) {
        transformedArray.push(value);
      }
    });
    return transformedArray;
  };

  // Filter out all null .mother property values
  var mothersKnown = filter(ancestry, function(person){
    return person.mother;
  });

  // use each to iterate over the byName object
  // use filter to iterate over mothersKnown,
  // determine mother / child relation,
  // calculate age difference, push to ageDiff
  var ageDiff = [];
  each(byName, function(child){
    filter(mothersKnown, function(mom){
      if (mom.name === child.mother) {
        var diff = mom.born - child.born;
        ageDiff.push(Math.abs(diff));
      }
      return ageDiff;
    });
  });
  // use average() to find the average parent / child age
  // difference, but with null .mother values not included
  console.log('Mother-child age difference:', average(ageDiff));
  // → 30.9375 - nulls removed

  // NOTE: using ancestry, without removing unknown mothers, will give the
  // result of 31.2, as shown in chapter 5 of eloquentjavascript
  // see http://eloquentjavascript.net/05_higher_order.html#c_+30TY+6MeW
  console.log('\n'); // new line

/*
Historical life expectancy: ----------------------------------------------------
  http://eloquentjavascript.net/05_higher_order.html#h_FkNn96IrQe

  When we looked up all the people in data set that lived more than 90 years,
  only the latest generation in the data came out. 
  Let's take a closer look at that phenomenon.

  Compute and output the average age of the people in the ancestry data set per 
  century. A person is assigned to a century by taking their year of death, 
  dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100). */

  // Given function
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  // Group
  var group = function(collection, callback) {
    var newObj = {};
    each(collection, function (obj) {
      var prop = callback(obj);
      // create a property for each group
      // and assign it a new empty array
      if (!newObj[prop]) {
          newObj[prop] = [];
      }
      // push to each group
      newObj[prop].push(obj); 
    });
    return newObj;
  }

  // GroupBy: century
  var groupBy = group(ancestry, function(person){
    person.century = Math.ceil(person.died / 100);
    return person.century;
  });
  console.log('Centuries:', groupBy);

  // Calculate average age by century
  each(groupBy, function(century){
    var cen; // for display only
    var cenAveAge =[];
    each(century, function(person){
      cen = person.century; // for display only
      var age = person.born - person.died;
      cenAveAge.push(Math.abs(age));
    });
    console.log('Historical life expectancy - average age in century ' + cen
     + ':', average(cenAveAge));
  });
  // → 16: 43.5
  //   17: 51.2
  //   18: 52.8
  //   19: 54.8
  //   20: 84.7
  //   21: 94
  console.log('\n'); // new line

/*
Every and Some: ----------------------------------------------------------------
  http://eloquentjavascript.net/05_higher_order.html#p_BZKBxgsPML

  Arrays also come with the standard methods every and some. Both take a 
  predicate function that, when called with an array element as argument, 
  returns true or false. Just like && returns a true value only when the 
  expressions on both sides are true, every returns true only when the predicate
  returns true for all elements of the array. Similarly, some returns true as 
  soon as the predicate returns true for any of the elements. They do not 
  process more elements than necessary—for example, if some finds that the 
  predicate holds for the first element of the array, it will not look at the 
  values after that.

  Write two functions, every and some, that behave like these methods, except 
  that they take the array as their first argument rather than being a method.*/

  // Every
  var every = function(collection, predicate){
    var result = true;
    for (var i = 0; i < collection.length; i++) {
      if (!predicate(collection[i])) {
        result = false;
      }
    }
    return result;
  };

  // Some
  var some = function(collection, predicate){
    var result = false;
    for (var i = 0; i < predicate.length; i++) {
      if (predicate(collection[i])) {
        result = true;
      }
    }
    return result;
  };
  console.log('every([NaN, NaN, NaN], isNaN):', every([NaN, NaN, NaN], isNaN));
  // → true
  console.log('every([NaN, NaN, 4], isNaN):', every([NaN, NaN, 4], isNaN));
  // → false
  console.log('some([NaN, 3, 4], isNaN):', some([NaN, 3, 4], isNaN));
  // → true
  console.log('some([2, 3, 4], isNaN):', some([2, 3, 4], isNaN));
  // → false
