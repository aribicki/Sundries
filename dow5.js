// Same exact code as the last example (file dow4.js) in the reading
// What names we give the global function and the object parameter don't matter
(function(bar) {
  var daymonikers = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  bar.blah = function(number) {
    return daymonikers[number];
    };
  bar.bleh = function(name) {
    return daymonikers.indexOf(name);
    };
})(this.foo = {});

print(foo.name(foo.number("Saturday")));
