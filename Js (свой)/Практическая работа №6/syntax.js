let name = 'Василий';
let surname = 'Кюндяйцев';
let middle = 'Анатольевич';

let me = {
  name: name,
  surname: surname,
  middleName: middle, 
  birthDate: { year: 2000, month: 3, day: 15 },
  married: false,
  'property with spaces': null,
}

me.education = 'ДВФУ';
me.occupation = 'Работает';

me['property with spaces'] = 38;
me['property.with.dots'] = 42;

delete me.education;
delete me['property with spaces'];

let myName = me.name;
let myBirthYear = me.birthDate.year;
let fourtyTwo = emptyObj['property with spaces'];

let emptyProp = enptyObj.someProp;

let emptyObj = {};

console.log(me);