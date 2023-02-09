export default class Students {
  constructor(name, surename, lastname, faculty, yearStudy, birthDate) {
    this.name = name
    this.surename = surename
    this.lastname = lastname
    this.faculty = faculty
    this.yearStudy = yearStudy
    this.birthDate = birthDate
  }

  get fio() {
    return this.surename.trim() + ' ' + this.name + ' ' + this.lastname
  }

  getYearStudy() {
    const currentTime = new Date()
    return currentTime.getFullYear() - this.yearStudy
  };

  getEndStudy() {
    const ageStudy = 4;
    return this.yearStudy + ageStudy;
  }

  getbirthDateString() {
    const yyyy = this.birthDate.getFullYear();
    let mm = this.birthDate.getMonth() + 1;
    let dd = this.birthDate.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '.' + mm + '.' + yyyy;
  };

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear()
    let m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age
  };
}
