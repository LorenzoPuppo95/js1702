console.log("hello world");
console.log("ciao mondo");
console.log("hello world");

//typeof
console.log(typeof 5);
console.log(typeof "hello world");
console.log(typeof 5);
console.log(typeof true);

//number

5; //integer
6.98; //float

//310000
3.1e5;

Infinity; //numero più grande possibile
-Infinity; //numero più piccolo possibile

NaN; //not a number

console.log(typeof NaN);
console.log(0/0); //NaN

console.log("somma 5 + 7", 5 + 7);
console.log("sottrazione 5 - 7", 5 - 7);
console.log("prodotto 5 * 7", 5 * 7);
console.log("divisione 5 / 7", 5 / 7);
console.log("potenza 5 ** 7", 5 ** 7);
console.log("resto 5 % 7", 5 % 7);

//MATH
console.log("radice quadrata 9", Math.sqrt(9));
console.log("arrotondamento 9.6", Math.round(9.6));
console.log("arrotondamento per difetto 9.6", Math.floor(9.6));

//STRING
console.log("234", 234);
console.log("io sono una stringa");
console.log('io sono una stringa');
console.log('io sono una "stringa"');
console.log("l'apostrofo è importante");
console.log("\"l'apostrofo\" è importante \n davvero");
console.log(`"l'apostrofo è importante \n davvero`);

//una string interpolata serve ad inserire codice direttamente 
console.log(`la somma di 5 e 7 è ${7 + 5}`);
console.log("ciao a tutti" + " " + "mi chiamo pippo");

//booleani

console.log("vero", true);
console.log("falso", false);

//operatori logici

//not
console.log("not vero", !true);
console.log("not falso", !false);

//and
console.log("true and true", true && true);
console.log("true and false", true && false);
console.log("false and true", false && true);
console.log("false and false", false && false);

//or
console.log("true or true", true || true);
console.log("true or false", true || false);
console.log("false or true", false || true);
console.log("false or false", false || false);

//undefined e null
console.log(typeof undefined);
console.log(typeof null);

//uguaglianza == / ===
console.log("cinque è uguale a cinque", 5==5);
console.log("cinque è uguale a sei", 5==6);
console.log("cinque è uguale a cinque", 5===5);
console.log("cinque è uguale a sei", 5===6);

console.log("la stringa 5 è uguale al numero 5", "5"==5);
console.log("la stringa 5 è uguale al numero 5", "5"===5);

//disuguaglianza != / !==
console.log("la stringa 6 è diversa dal numero 6", "6"!=6);
console.log("la stringa 6 è diversa dal numero 6", "6"!==6);

//operatori di confronto </<=/>/>=
console.log("5 è minore di 6", 5<6);
console.log("5 è maggiore di 6", 5>6);

console.log("a è maggiore di b", "a">"b");
console.log("a è minore di b", "a"<"b");
console.log("a è maggiore di A", "a">"A");
console.log("b è maggiore di A", "b">"A");

//variabili - var, let, const
let pippo = 5;

console.log(pippo + 2);

pippo = "stocazzo";

console.log(pippo);

const pluto = 5;

console.log(pluto + 2);

// pluto = "stocazzo";

// console.log(pluto);

// pericoloso con var, non usare
// paperino = 10;

// console.log(paperino + 10);

// var paperino = 5;

// let corregge il comportamento malsano che avrebbe var facendo la stessa cosa
// paperino = 10;

// console.log(paperino + 10);

// let paperino = 5;

//Camel Case
const numeroDaElevareAPotenza = 9;
const esponenteDellaPotenza = 9;

console.log(numeroDaElevareAPotenza ** esponenteDellaPotenza);

//short circuit operator

const qui = 5 || 6;
console.log(qui);

const quo = false || 6;
console.log(quo);

const qua = 5 ?? 6;
console.log(qua);

const que = false ?? 6;
console.log(que);

const quu = undefined ?? 6;
console.log(quu);

const quack = (5 > 4) ? 10 : 20;
console.log(quack);

const quick = (5 < 4) ? 10 : 20;
console.log(quick);