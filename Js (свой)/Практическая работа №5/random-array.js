// это функция, внутри которой нужно написать ваш код
// count, n и m будут задаваться в момент вызова функции, как в примере кода под ней
function randomArray(count, n, m) {
  let array = [];
  let range = Math.abs(m - n);
  let min = Math.min(n, m);

  for (let i = 0; i < count; ++i) {
    array.push(Math.round((Math.random() * range) + min));
  }

  console.log(array);
}

// вызов функции
randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default randomArray;
