// These variables need global scope
var ENGLISH = 0,
    SPANISH = 1;

var dayName = function() {
  var names = [];
  names[ENGLISH] = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];
  names[SPANISH] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", 
                  "Viernes", "Sabado"];

  return function(language, number) {
    return names[language][number];
    };
}();

print(dayName(SPANISH, 1));
