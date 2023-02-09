const me = {
  name: 'Василий',
  surname: 'Кюндяйцев',
  // Функция-метод объекта, this будет указывать на сам объект 
  getFullname() {
    return `${this.name} ${this.surname}`;
  }, 
  // Аналогичная функция, обьявленная как стрелочкая функция 
  getFullnameArrow: () => '${this.name} ${this.surname}',
};

// Работает 
console.log(me.getFullname());
// Не сработает, так как в стрелочной функции нет собственнго this 
console.log(me.getFullnameArrow());