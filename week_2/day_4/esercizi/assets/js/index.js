const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
NO CONSOLE LOG
*/
var characters = [];
console.log(characters);

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
CONSOLE LOG
*/
for (let index = 0; index < starWarsCharacters.length; index++) {
  characters.push(starWarsCharacters[index].name);
}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: "Leia Organa", hair_color: "brown", eye_color: "brown"}
  CONSOLE LOG
*/
var femaleCharacters = [{ name: "Leia Organa", hair_color: "brown", eye_color: "brown" }];
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
  CONSOLE LOG
*/
var eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blueGray: []
}


/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
  CONSOLE LOG
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case 'blue':
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case 'yellow':
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case 'brown':
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case 'red':
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case 'blue-gray':
      eyeColor.blueGray.push(starWarsCharacters[i]);
      break;
    default:
      console.log('404');
      break;
  }
}
console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  CONSOLE LOG
  */
var counter = 0;
var totalMass = 0;
while (counter < starWarsCharacters.length) {
  totalMass += parseInt(starWarsCharacters[counter].mass);
  counter++;
}
console.log(totalMass);
/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
CONSOLE LOG
*/
totalMass = 400;
switch (true) {
  case totalMass < 500:
    console.log("Ship is under loaded");
    break;
  case totalMass === 500:
    console.log("Ship is half loaded");
    break;
  case totalMass > 1000:
    console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
    break;
  case totalMass > 900:
    console.log("Critical Load: Over 900");
    break;
  case totalMass > 700:
    console.log("Warning: Load is over 700");
    break;
  default:
    console.log("OK");
    break;
}

/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
CONSOLE LOG DELL'INTERO ARRAY
*/
for (let index = 0; index < starWarsCharacters.length; index++) {
  if (starWarsCharacters[index].gender === 'n/a') {
    starWarsCharacters[index].gender = 'robot';
  }
}
console.log(starWarsCharacters);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
for (let i = 0; i < femaleCharacters.length; i++) {
  for (let j = 0; j < characters.length; j++) {
    if (femaleCharacters[i].name === characters[j]) {
      characters.splice(j, 1);
    }
  }
}
console.log(characters);

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
var randomCharacter = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
console.log(randomCharacter);

function pronoun() {
  let x;
  if (randomCharacter.gender === 'male') {
    x = 'He';
  }
  else if (randomCharacter.gender === 'female') {
    x = 'She';
  }
  else {
    x = 'It';
  }
  return x;
}

function hair() {
  let y;
  if (randomCharacter.hair_color === 'blond' || randomCharacter.hair_color === 'black' || randomCharacter.hair_color === 'auburn, white' || randomCharacter.hair_color === 'brown' || randomCharacter.hair_color === 'brown, grey') {
    y = `has ${randomCharacter.hair_color} hair`
  } else {
    y = 'bald'
  }
  return y;
}

console.log(
  `The found character name is: ${randomCharacter.name} \n${pronoun()} is ` +
  `${randomCharacter.height} cm tall \nand ${hair()}, ` +
  `\nwith ${randomCharacter.skin_color} skin.`
)