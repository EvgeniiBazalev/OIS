'use strict';

// let answer = Number(prompt('введите число', 'введите сюда'));


//     (answer>0) ? alert(1):
//     (answer<0) ? alert(-1):
//     (answer==0) ? alert('Nol'): alert('ne opoznano');



// if (answer == 'ECMAScript') {
//     alert('Ok');
// } else {
//     alert('Ne verno');
// }

function compareNum (a, b) {
    return a-b;
}

let result;

let a = 1;
let b = 'null';

(a + b < 4) ? result = 'malo' :
(a + b > 4) ? result = 'mnogo' :
(a + b > 4) ? result = 'ravno': result = 'hz';
console.log(result);

let message;
let login = '';
(login == 'Сотрудник') ? message = 'Привет':
(login == 'Директор') ? message = 'Здравствуйте':
(login == '') ? message = 'Нет логина': message = '';

console.log(message);





// arr[20] = 25;

// // for (let i=0; i<arr.length; i++) {
// // console.log(arr[i]);
// // }

// arr.forEach(function(element, i, arr) {
//     console.log(`${i}: ${element} внутри массива ${arr}`);
// });
