// Main array (names) has global scope, that's bad
var ENGLISH = 0,
    SPANISH = 1;
var names = [];
names[ENGLISH] = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];
names[SPANISH] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", 
                  "Viernes", "Sabado"];

function dayName(language, number) {
  return names[language][number];
}

print(dayName(SPANISH, 4));
