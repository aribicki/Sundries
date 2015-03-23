// These variables need global scope
var ENGLISH = 0,
    SPANISH = 1;

// Note that we revert to using TWO anonymous functions here
(function(exports) {
  var names = [];
  names[ENGLISH] = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];
  names[SPANISH] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", 
                  "Viernes", "Sabado"];

  // Return an object, both functions are named properties thereof!!
  exports.name = function(language, number) { 
    return names[language][number]; 
    }
  exports.number = function(language, number) {
    return names[language].indexOf(number);
    }
})(this.weekDay = {});

write('Enter number 1 for English, 2 for Spanish: ');
var lang = readline();
lang = (lang == 1)?0:1;
write('Enter 1 for number-to-name, 2 for name-to-number: ');
var isNumber = readline();

// Determine which operation to perform
if (isNumber == 1) {
  write('Enter day number 1-7 for which day: ');
  var dayNo = readline();
  // Adjust for computer counting
  dayNo = --dayNo;
  print(weekDay.name(lang, dayNo));
} else {
  write('Enter day of week in chosen language: ');
  var dayName = readline();
  print(weekDay.number(lang, dayName));
}  
