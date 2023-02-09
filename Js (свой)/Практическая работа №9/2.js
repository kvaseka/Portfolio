function doSomeThingStupid() {
  cosnole.log(x); // Ошибки не будет, в консоль выведется undefined
  var x = 123; 
  console.log(x); // 123, как и можно было ожидать 
}
// Код выше можно переписать так =>

function doSomeThingStupid() {
  // Обьявление (НЕ присваивание!) всплыло... 
  var x;
  console.log(x);
  // ... но присваивание при этом осталось на месте 
  x = 123;
  console.log(x);
}

