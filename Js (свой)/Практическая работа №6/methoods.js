let me = {
  birthDate: { years: 2000, month: 3, day: 15 },
  getAge: function () {
    let now = new Date();
    let born = new Date(
      this.birthDate.years,
      this.birthDate.month + 1,
      this.birthDate.day
    );
    let diffInMilliseconds = now.getTime() - born.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25)
  }
  //...другие свойства...
};

console.log(me.getAge()); // сейчас мне 22