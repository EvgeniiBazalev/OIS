'use strict';

// let maxNumber;
// let arr = [];
// let arrnew = [];
// let arrNumber = 0;
// let arrNumbernew = 0;
// let i;
// let f;


// function simplNumCalc(maxNumber) {
//     goNext: for (i = 1; i < maxNumber; i++) {
//         // console.log(`i равно ${i}`);

//         for (f = 2; f < i; f++) {
//             // console.log(`f равно ${f}`);
//             // console.log(`остаток от деления равно ${i % f}`);
//             if (i % f == 0) {
//                 continue goNext;
//             }
//         }

//         arr[arrNumber] = i;
//         arrNumber = arrNumber + 1;

//         // console.log(`записали в массив ${i}`);

//     }

//     return arr;

// }



// function simplNumCalcnew(maxNumber) {
//     goNext: for (i = 1; i < maxNumber; i++) {
//         // console.log(`i равно ${i}`);

//         for (f = 2; f < (i ** (1 / 2) + 1 / 2); f++) {
//             // console.log(`f< равно ${(i ** (1 / 2) + 1 / 2)}`);
//             // console.log(`f равно ${f}`);
//             // console.log(`остаток от деления равно ${i % f}`);
//             if (i % f == 0) {
//                 continue goNext;
//             }
//         }

//         arrnew[arrNumbernew] = i;
//         arrNumbernew = arrNumbernew + 1;

//         // console.log(`записали в массив ${i}`);

//     }

//     return arrnew;

// }
// // console.log(simplNumCalc(1000));
// // console.log(simplNumCalcnew(1000));

// function arraysAreIdentical(arr, arrnew){
//     if (arr.length !== arrnew.length) {return false;}
//     for (var i = 0, len = arr.length; i < len; i++){
//         if (arr[i] !== arrnew[i]){
//             return false;
//         }
//     }
//     return true; 
// }

// // arr = simplNumCalc(1000000);

// // console.log(arr.length);
// // console.log(arr[arr.length-1]);


// arrnew = simplNumCalcnew(1000000);
// console.log(arrnew.length);
// console.log(arrnew[arrnew.length-1]);
// // console.log(arraysAreIdentical(arr, arrnew));

// let yes = () => alert('Вы согласились');
// let no = () => alert('Вы отказались');

// let ask = (question, yes, no) => {
//     if (confirm(question)) { yes() }
//     else {no();}
//     return "Привет!!";
// };

// // console.log(ask('Вы согласны?',));

// ask ('Вы согласны?', yes, no);

// function yes() {
//     alert('Вы согласились');
// }

// function no() {
//     alert('Вы отказались');
// }

// function ask(question, yes, no) {
//     if (confirm(question)) { yes() }
//     else {no();}
// }

// ask('Вы согласны?', yes, no);


// function asked() {
//     console.log('Hi man');
// }

// console.log(null==0);