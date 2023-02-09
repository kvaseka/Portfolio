// Задача №1
let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;
let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
  Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
));

let ploshad = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log(ploshad);

// Задача №2

let a = 15.2248232; //0.3333
let b = 77.221355;
let precision = 4;

let aNormalized = Math.round(
  a * Math.pow(10, precision) //0.333
);

let bNormalized = Math.round(
  b * Math.pow(10, precision) //0.333
);

console.log(aNormalized);
console.log(bNormalized);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', aNormalized === bNormalized);
console.log('Первое число больше', aNormalized > bNormalized);
console.log('Первое число меньше', aNormalized < bNormalized);

// Задача №3

let n = 0;
let m = 100;

let range = Math.abs(m - n); //Количество чисел N

let numberInRange = Math.round(Math.random() * range); //Получаем число от 0 до N
let min = Math.min(n, m);

console.log(min + numberInRange);
