let me = {
  name: 'Василий',
};

let newMe = Object.assign({}, me, { name: 'Маша' });
let newMewithSpread = { ...me, name: 'Маша и Вася' };

console.log(me);
console.log(newMe);
console.log(newMewithSpread);