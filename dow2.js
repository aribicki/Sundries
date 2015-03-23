// These variables need global scope
var ENGLISH = 0,
    SPANISH = 1;

// Note that we revert to using TWO anonymous functions here
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

write('Enter number 1 for English, 2 for Spanish: ');
var lang = readline();
write('Enter day number 1-7 for which day: ');
var dayNo = readline();
// Adjust for computer counting
lang = (lang == 1)?0:1;
dayNo = --dayNo;
print(dayName(lang, dayNo));
