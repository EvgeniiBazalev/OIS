'use strict';

// let user = prompt('введите логин', '');
// let password;
// // alert(user);

// if (user == 'Админ') {
//     password = prompt('введите пароль', '');

//     if (password == 'Я Главный') {
//         alert('Здравствуй Админ');
//     } else if (password == null) {
//         alert('Отменено');
//     } else if (password != 'Я Главный') {
//         alert('Неверный пароль');    
//     } else {
//         alert('Не понятно, что произошло');
//     }
// } else if (user == null) {
//     alert('Отменено');
// } else if (user != 'Админ') {
//     alert('Ты не Админ!');
// } else {
//     alert('Не понятно, что произошло');
// // }

// for (let i = 0; i < 3; ++i) {

//     console.log(`this is number ${i}!`);

// }
// let i = 0;

// while (++i<3) {
//     console.log(`this is number ${i}!`);
// }

// let result = 99;

// while (result < 100) {
//     result = prompt('Введите число больше 100', 'сюда');
    

//     if (result == null) {
//         break;
//     } else if (!Number(result)) {
//         result = 5;
//     }
// }

// let a = 'Привет';
// a = Number(a);
// console.log(a);

// console.log(a == NaN);

// let count = 0;
// let maxNumber = 55;

// let i;
// let j;

// for (i=1; i<maxNumber; i++){

//     for (j=2; j < maxNumber; j++){

//         // console.log(`i равна ${i}, j равна ${j}`)
//         // console.log(`остаток от деления равен ${i%j}`)

//         if (i%j == 0) {
//             count++;
//         }
//         // console.log(`count равен ${count}`)    
//     }

//     if (count==1) {
//         console.log(`внешний цикл выдает i равной ${i}`);
//     }
//     count=0;
// }