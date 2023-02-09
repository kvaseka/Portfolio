let me = {
  name: 'Василий',
};

let newMe = Object.assign(me, { name: 'Маша'},);

console.log(me);
console.log(newMe);

console.log(me === newMe);