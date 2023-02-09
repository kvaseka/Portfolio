// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
  let step = 2;
  for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] === true) {
      step -= 1;
      if (step == 1) {
        console.log(`танк поврежден`);
      } else if (step == 0) {
        console.log(`танк переместился на ${i + 1}`);
        console.log(`танк уничтожен`);
        break
      } else {
        console.log(`танк переместился на ${i + 1}`);
      }
    }
    console.log(`танк переместился на ${i + 1}`);
  }
}

// вызов функции
moveTank([false, false, false, false, false, false, false, false, false, false]); // танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
