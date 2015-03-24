load('gods.js');

// Map old millisecond GOD objects into new array with friendly Dates
var friendlyGods = GODS.map(function(god) {
  var newObj = {};

  // This "sort of" blew up in my face . . and the reason why is interesting!!
  // newObj = god;

  // And this will too, if the object has function properties!!
  //  for different reasons . . . in other words it is a hack
  newObj = JSON.parse(JSON.stringify(god));
  newObj.release =  new Date(newObj.release).toLocaleDateString('EN-US','%d-%b-%Y');
  return newObj;
  });

// Show results of mapping transform
//print('Original dataset:');
//print(JSON.stringify(GODS) + '\n');
//print('Dataset with dates mapped to human readable format:');
//print(JSON.stringify(friendlyGods) + '\n');

// Original line from Jared's code
// var testDate = 1357016400000;
// Convert into a formatted Date object
var testDate = new Date(1357016400000).toLocaleDateString('EN-US','%d-%b-%Y');

// Attempting find gods created within the last year
print('Gods released after: ' + testDate);
// The built-in filter only selects, it doesn't project
var selections = friendlyGods.filter(
  function(element) {
    if (new Date(element.release) > new Date(testDate)) 
      return element; 
});

// Print results
selections.forEach(function(element) {
  print(element.name);
  });
