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

// const secretNumber = Math.round(Math.random() * 10)

// while (true) {
//     const guessedString = prompt("indovina il numero a cui sto pensando (da 0 a 10)...");
//     const guessedNumber = parseInt(guessedString);
//     if (guessedNumber === secretNumber) {
//         alert("hai indovinato");
//         break;
//     } else {
//         alert("schiappa");
//     }
// }

// let startingString = '';

// while(startingString.length <= 10){
//     startingString+="*";
// }
// console.log(startingString);

// do...while

// const pippo=10;
// const pluto=20;
// while (pippo>pluto){
//     console.log('sono entrato');
// }

// do {
//     console.log('sono entrato nel do');
// } while (pippo>pluto);

// for (let i=0;i<10;i++){
//     console.log("ciclo " +i);
// }

// let string = "";
// for (;;) {
//     string+="#";
//     if (string.length===10){
//         break;
//     }   
// }
// console.log(string);

// for (let y = 3; y >= 0; y--) {
//     let row = "";
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y})`;
//     }
//     console.log(row);
// }

// switch case

const ageStr = prompt("in che anno sei nato?");

switch (ageStr) {
    case "1978":
        alert("sei nato nel mio anno")
        break;
    case "1990":
        alert("sei nato nell'anno dei mondiali in italia")
        break;
    case "1984":
        alert("sei nato nell'anno di laura")
        break;
    default:
        alert("che anno noioso")
        break;
}