// const userName = prompt("come ti chiami?");
// alert("perfetto allora tu sei " + userName);

//IF
// const userAgeString = prompt("quanti anni hai?");

// if(parseInt(userAge) > 18) {
//     alert("benvenuto nel sito di incontri piccanti");
// } else {
//     alert("tu non puoi passare");
// };

// const userAgeNumber = parseInt(userAgeString);

// if(userAgeNumber >= 18 && userAgeNumber < 80) {
//     alert("benvenuto nel sito di incontri piccanti");
// } else if (userAgeNumber >= 80) {
//     alert("tu non puoi passare!");
// } else {
//     alert("torna a mangiare il gelatino");
// };

//I TRICICLI

//Ciclo while

// let i = 1;
// while (i < 1e50) {
//     console.log(i);
//     i+=i;
// }
// console.log(i);

// let i = 0;
// while (i <= 10) {
//     const square = i ** 2;
//     console.log(square);
//     i++;
// }

 const secretNumber = Math.round(Math.random() * 10)

while (true) {
    const guessedString = prompt("indovina il numero a cui sto pensando (da 0 a 10)...");
    const guessedNumber = parseInt(guessedString);
    if (guessedNumber === secretNumber) {
        alert("hai indovinato");
        break;
    } else {
        alert("schiappa");
    }
}