// Same exact code as the last example in the reading
// What names we give the global function and the object parameter don't matter
(function(bar) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  bar.name = function(number) {
    return names[number];
  };
  bar.number = function(name) {
    return names.indexOf(name);
  };
})(this.foo = {});

print(foo.name(foo.number("Saturday")));
