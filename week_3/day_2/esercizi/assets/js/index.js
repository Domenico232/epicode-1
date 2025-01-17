/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log('ESERCIZIO 1');
var concatF2AndL3 = (string1, string2) => {
  let string3 = ''
  string3 = string1.substring(0, 2).concat(string2.substr(-3, 3));
  return string3;
}
console.log(concatF2AndL3('Goku', 'Vegeta'));

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
*/
console.log('ESERCIZIO 2');
var odd = () => {
  let result = [];
  for (let index = 1; index < 101; index += 2) {
    result.push(index);
  }
  return result;
}
console.log(odd());

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
console.log('ESERCIZIO 3');
var mul5 = () => {
  let result = [];
  for (let index = 0; index < 100; index++) {
    if (index % 5 === 0) {
      result.push(index);
    }
  }
  return result;
}
console.log(mul5());

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
console.log('ESERCIZIO 4');
var random100 = () => {
  let result = [];
  for (let index = 0; index < 11; index++) {
    result.push(Math.floor(Math.random() * 101));
  }
  return result;
}
console.log(random100());

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
console.log('ESERCIZIO 5');
var evenNumbers = (numbers) => {
  return numbers.filter(element => element % 2 === 0);
}
console.log(evenNumbers([0, 1, 2, 3]));
console.log(evenNumbers([100, 17, -2000, 13]));

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
*/

console.log('ESERCIZIO 6');
var sumArray = (numbers) => {
  return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(sumArray([0, 1, 2, 3]));
console.log(sumArray([-100, 100, -200, 200]));


/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
console.log('ESERCIZIO 7');
var incArray = (numbers) => {
  return numbers.map(element => element + 1);
}
console.log(incArray([0, 1, 2, 3]));

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('ESERCIZIO 8');
var replaceWithLenght = (numbers) => {
  return numbers.map(element => element.length);
}
console.log(
  replaceWithLenght(['Giocatore1', 'Giocatore2', 'e', 'uno', 'e', 'due']));

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
console.log('ESERCIZIO 9');
var delEven = (numbers) => {
  return numbers.filter(element => element % 2)
}
console.log(delEven([0, 1, 2, 3]));

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
console.log('ESERCIZIO 10');
var random100NoDuplicate = () => {
  let result = [Math.floor(Math.random() * 11)];
  for (let index = 1; index < 11; index++) {
    let randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber != result[index - 1]) {
      result.push(randomNumber);
    }
  }
  return result;
}
console.log(random100NoDuplicate());

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
console.log('ESERCIZIO 11');
var reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray([1, 3, 5]));
console.log(reverseArray([10, 100, 1000]));
console.log(reverseArray([]));
console.log(reverseArray([999]));


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log('ESERCIZIO 12');
var oldMovie = () => {
  let result = movies[0];
  movies.forEach(element => {
    if (parseInt(element.Year) < parseInt(result.Year)) {
      result = element;
    }
  });
  return result;
}
console.log(oldMovie());

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log('ESERCIZIO 13');
var countMovies = () => {
  return movies.length;
}
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log('ESERCIZIO 14');
var getMoviesTitles = () => {
  return movies.map(element => element.Title);
}
console.log(getMoviesTitles());

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log('ESERCIZIO 15');
var getMillenials = () => {
  return movies.filter(movie => movie.Year.charAt(0) == 2);
}
console.log(getMillenials());

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log('ESERCIZIO 16');

var getMovieById = (imdbID) => {
  return movies.find(movie => movie.imdbID === imdbID);
}

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'INPUT') {
    let movie = getMovieById(document.getElementById('selectFilm').value);
    document.getElementById('title').innerHTML = movie.Title;
    document.getElementById('year').innerHTML = movie.Year;
    document.getElementById('type').innerHTML = movie.Type;
    document.getElementById('poster').src = movie.Poster;
  }
});

console.log(getMovieById('tt0120737')); // LOR 1
console.log(getMovieById('tt4154796')); // Avengers: Endgame
console.log(getMovieById('tt0100054')); // Lord of The Flies
console.log(getMovieById('Giocatore1')); // Nothing

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log('ESERCIZIO 17');
var sumYears = () => {
  return movies.reduce((acc, movie) => acc + parseInt(movie.Year), 0);
}
console.log(sumYears());

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
console.log('ESERCIZIO 18');
var searchByWord = (word) => {
  return movies.filter(movie => movie.Title.includes(word));
}
console.log(searchByWord('Ring'));

