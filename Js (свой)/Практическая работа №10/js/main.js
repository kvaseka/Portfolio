import students from './students.js';

// Массив сотрудников
const studentMassiv = [
  new students('Василий', 'Кюндяйцев', 'Анатольевич', 'КиберБезопасность', 2018, new Date(2000, 2, 15)),
  new students('Кирилл', 'Иванов', 'Дмитриевич', 'Литература', 2019, new Date(2001, 11, 13))
]

const $studentsList = document.getElementById('students-list')
const $studentsListTHAll = document.querySelectorAll('.studentsTable th')

let column = 'fio';
let columnDir = true;

// Получить TR сотруднников
function newStudentsTR(students) {
  const $studentsTR = document.createElement('tr')
  const $fioTD = document.createElement('td')
  const $facultyTD = document.createElement('td')
  const $birthDateTD = document.createElement('td')
  const $yearStudyTD = document.createElement('td')

  $studentsTR.append($fioTD)
  $studentsTR.append($facultyTD)
  $studentsTR.append($birthDateTD)
  $studentsTR.append($yearStudyTD)

  $fioTD.textContent = students.fio
  $facultyTD.textContent = students.faculty
  $birthDateTD.textContent = students.getbirthDateString() + '(' + students.getAge() + ' лет)'
  $yearStudyTD.textContent = students.yearStudy + '-' + students.getEndStudy() + ' ' + '(' + students.getYearStudy() + ' курс)'
  return $studentsTR;
}

// Получить сортировку массива по параметрам
function getSortStudents(prop, dir) {
  const StudentCopy = [...studentMassiv]
  return StudentCopy.sort(function (studentA, studentB) {
    if ((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
      return -1;
  })
}

// Сортировка
function render() {
  let StudentCopy = [...studentMassiv]

  StudentCopy = getSortStudents(column, columnDir)

  $studentsList.innerHTML = ''

  for (const students of StudentCopy) {
    $studentsList.append(newStudentsTR(students))
  }
};

// События сортировки
$studentsListTHAll.forEach(element => {
  element.addEventListener('click', function () {
    column = this.dataset.column;
    columnDir = !columnDir
    render();
    console.log(column)
  })
});

// Добавление
document.getElementById('add-student').addEventListener('submit', function (event) {
  event.preventDefault()

  studentMassiv.push(new students(
    document.getElementById('input-name').value.trim(),
    document.getElementById('input-surename').value.trim(),
    document.getElementById('input-lastname').value.trim(),
    document.getElementById('input-faculty').value.trim(),
    Number(document.getElementById('input-yearStudy').value),
    new Date(document.getElementById('input-birthDate').value),
  ))

  //Валидация
  render()
})

render();
