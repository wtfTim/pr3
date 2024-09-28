'use strict'

// Задание 1

let price = +prompt('Стоимость товара');
let sum = +prompt('Количество денег клиента');
let gg = 0;
if ((price > 0) && (sum > 0)) {
    if (price > sum) {
        gg = price - sum;
        console.log(`Нехватает ${gg} р.`)
    } else if (price < sum) {
        gg = sum - price;
        console.log(`Покупка совершена. Ваша сдача ${gg} р.`)
    } else if (price = sum) {
        console.log('Покупка совершена')
    }
} else {
    alert('Некорректные данные');
}

// Задание 2

let num = +prompt("Введите число");

if (num > 0) {
    alert('1');
} else if (num < 0) {
    alert('-1');
} else if (num == 0) {
    alert('0');
}

//  Задание 3

let a =Number(prompt("Введите число"));
let b = Number(prompt("Введите число"));
let result = (a + b < 4) ? 'Мало' : 
'Много';
console.log(result);


// Задание 4

let l = prompt("Введите логин");
let message = (l == 'Сотрудник') ? 'Привет' : 
(l == 'Директор') ? 'Здравствуйте' : 
(l == '') ? 'Нет логина' :
'Неверно'
console.log(message); 

// Задание 5

let login = prompt("Ваш логин");
if (login == "Админ") {
    let password = prompt("Пароль");
    if (password == 'Я главный') {
        console.log('Здравствуйте!');
    } else if(password == null){
        console.log('Отменено');
    } else{
        console.log('Я вас не знаю');
    }
} else if (login == null) {
    console.log("Отменено")
} else {
    console.log("Я вас не знаю")
}