// задание 3. Напишите исходный код программы, которая 
// считывает единственное целое число x и проверяет, 
// является ли оно совершенным. Совершенным называется число, 
// равное сумме всех своих собственных делителей (отличных от x).
// Например: 6 = 1 + 2 + 3; 28 = 1 + 2 + 4 + 7 + 14.

let n = parseInt(prompt('введите число для проверки на совершенность'));
let spisok= [];
for (let i = 1; i < n - 1; i++) {
    if (n % i === 0){
        spisok.push(i);
    }
}

let summa_spiska = 0; 
for (let i = 0; i < spisok.length; i++) {
    summa_spiska += spisok [i];
}

if (summa_spiska === n ) {
    console.log ('Число совершенное');
} else {
    console.log ('Число не совершенное');
}