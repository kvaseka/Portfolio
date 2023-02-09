function doSomeThingStupid() {
  console.log(x); // в консоль выведется undefined
  // Кажется, что этот блок никогда не выполнится, но это не совсем так
  if (false) {
    var x = 123;
  }
  console.log(x); // undefined
}

// Код можно переписать так

function doSomeThingStupid() {
  var x;
  console.log(x);
  if (false) {
    x = 123;
  }
  console.log(x);
}