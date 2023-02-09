let name = 'Василий';
let surname = 'Кюндяйцев';

function getFullName() {
  return this.name + ' ' + this.surname;
}

let obj = { name, surname, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function() {
  console.log(`Меня зовут ${this.name} ${this.surname}`);
};

obj.whoAmI();

delete obj.getFullName;

console.log(obj.getFullName());

let otherObj = {
  someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;