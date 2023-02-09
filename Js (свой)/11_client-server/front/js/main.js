// !!База данных
let listData = [
  {
    name: 'василий',
    surename: 'кюндяйцев',
    lastname: 'анатольевич',
    faculty: 'кибербезопасность',
    birthday: new Date(2000, 2, 15),
    yearStudy: 2018,
  },
  {
    name: 'кирилл',
    surename: 'пинчук',
    lastname: 'алексеевич',
    faculty: 'электроника и наноэлектронка',
    birthday: new Date(2002, 7, 23),
    yearStudy: 2020,
  },
  {
    name: 'николай',
    surename: 'черноусов',
    lastname: 'егорович',
    faculty: 'космология',
    birthday: new Date(1998, 3, 2),
    yearStudy: 2017,
  },
];
let sortColumnFlag = 'fio'
let sortDirFlag = true
var end = new Date();

// Сохраняем URL адрес на requestURL
var requestURL = 'http://localhost:3000/api/students';
// Создаем новый экземпляр запроса
var request = new XMLHttpRequest();
// Копируем запрос из requestURL в request
request.open('GET', requestURL);
// Меняем тип данных из JSON -> JS
request.responseType = 'json';
// Ждет полного ответа от сервера
request.send();

request.onload = function () {
  // Ответ на наш запрос от сервера
  var serverStudentsList = request.response;
  for (let i = 0; i < serverStudentsList.length; i++) {
    let nameStudents = serverStudentsList[i]['name'];
    let surnameStudents = serverStudentsList[i]['surname'];
    let lastnameStudents = serverStudentsList[i]['lastname'];
    let birthdayStudents = serverStudentsList[i]['birthday'];
    let yearStudyStudents = serverStudentsList[i]['yearStudy'];
    let facultyStudents = serverStudentsList[i]['faculty'];

    listData.push({
      name: nameStudents,
      surename: surnameStudents,
      lastname: lastnameStudents,
      faculty: facultyStudents,
      birthday: birthdayStudents,
      yearStudy: +yearStudyStudents,
    })
  }
}


// !!Создане элементов
// Создаем матрешку
const $app = document.getElementById('app')
// Создаем из инпутов элементы, потом туда накидаем данные
const $addForm = document.getElementById('add-form')
const $nameInp = document.getElementById('add-form__name-inp')
const $surenameInp = document.getElementById('add-form__surename-inp')
const $lastnameInp = document.getElementById('add-form__lastname-inp')
const $facultyInp = document.getElementById('add-form__faculty-inp')
var $birthdayInp = document.getElementById('add-form__birthday-inp')
const $yearStudyInp = document.getElementById('add-form__yearStudy-inp')
// Клик по добавить студента
const $sortBtn = document.getElementById('sort__btn')
const $sortFIOBtn = document.getElementById('sort__fio')
const $sortFacultyBtn = document.getElementById('sort__faculty')
const $sortbirthdayBtn = document.getElementById('sort__birthday')
const $sortYearStudyBtn = document.getElementById('sort__yearStudy')
const $sortStudyEndBtn = document.getElementById('sort__yearStudyEnd')

const $filterForm = document.getElementById('filter-form')
const $fioFilterInp = document.getElementById('filter-form__fio-inp')
const $facultyFilterInp = document.getElementById('filter-form__faculty-inp')
const $yearStudyFilterInp = document.getElementById('filter-form__yearStudy-inp')

const $table = document.createElement('table')
const $tableHead = document.createElement('thead')
const $tableBody = document.createElement('tbody')

// 2) Засовываем матрешку элементы
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)

// 3) В созданных матрешках засовываем tr и th элементы, туда будем засовывать данные
const $tableHeadTr = document.createElement('tr')
const $tableBodyThFIO = document.createElement('th')
const $tableBodyThFaculty = document.createElement('th')
const $tableBodyThbirthday = document.createElement('th')
const $tableBodyThYearStudy = document.createElement('th')

// 4) в tr засовываем th элементы
$tableHeadTr.append($tableBodyThFIO)
$tableHeadTr.append($tableBodyThFaculty)
$tableHeadTr.append($tableBodyThbirthday)
$tableHeadTr.append($tableBodyThYearStudy)

// 5) В наши th элементы засовываем данные
$tableBodyThFIO.textContent = 'ФИО'
$tableBodyThFaculty.textContent = 'Факультет'
$tableBodyThbirthday.textContent = 'Дата рождения'
$tableBodyThYearStudy.textContent = 'Год обучения и номер курса'

// 6) в tableHead засовыаем tableHeadTr
$tableHead.append($tableHeadTr)

// 7) Украшиваем наш список
$app.classList.add('table', 'table-scriped-columns', 'table-dark')
$table.classList.add('table', 'table-scriped-columns', 'table-dark')
$tableBody.classList.add('table', 'table-scriped-columns', 'table-dark')
$tableHead.classList.add('table', 'table-scriped-columns', 'table-dark')

// Создание Tr одного пользователя
function createUserTr(oneUser) {
  const $userTr = document.createElement('tr')
  const $userFIO = document.createElement('th')
  const $userFaculty = document.createElement('th')
  const $userbirthday = document.createElement('th')
  const $userYearStudy = document.createElement('th')

  $userTr.append($userFIO)
  $userTr.append($userFaculty)
  $userTr.append($userbirthday)
  $userTr.append($userYearStudy)

  $userFIO.textContent = oneUser.fio
  $userFaculty.textContent = oneUser.faculty
  $userbirthday.innerHTML = oneUser.birthday.getDate() + "." + (oneUser.birthday.getMonth() + 1) + "." + oneUser.birthday.getFullYear() + ' ' + '(' + oneUser.numberBirthday + ' лет)'

  if (numberCourse = 0) {
    $userYearStudy.textContent = oneUser.yearStudy + ' ' + '(1 курс)'
  }

  if (oneUser.numberCourse > 4) {
    $userYearStudy.textContent = oneUser.yearStudy + '-' + oneUser.numberEndCourse + ' (Закончил)'
  } else {
    $userYearStudy.textContent = oneUser.yearStudy + '-' + oneUser.numberEndCourse + ' ' + '(' + oneUser.numberCourse + ' курс)'
  }

  return $userTr
}

// Фильтрация
function filter(arr, prop, value) {
  return arr.filter(function (oneUser) {
    if (String(oneUser[prop].toLowerCase()).includes(value.toLowerCase().trim())) return true
  });
}

// !!Рендер а именно наш массив засовываем в матрешку! (есть несколько этапов подготовка, создание и засовывание чувачков)
function render(arrData) {
  $tableBody.innerHTML = '';
  let copyListData = [...arrData]

  // Подготовка
  for (const oneUser of copyListData) {
    oneUser.fio = oneUser.surename + ' ' + oneUser.name + ' ' + oneUser.lastname
    oneUser.numberCourse = 2023 - oneUser.yearStudy;
    oneUser.numberEndCourse = oneUser.yearStudy + 4;
    oneUser.numberBirthday = 2023 - oneUser.birthday.getFullYear()
  }

  // Сортировка
  copyListData = copyListData.sort(function (a, b) {
    let sort = a[sortColumnFlag] < b[sortColumnFlag]
    if (sortDirFlag == false) sort = a[sortColumnFlag] > b[sortColumnFlag]
    if (sort) return -1
  })

  // Фильтрация
  if ($fioFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'fio', $fioFilterInp.value)
  }
  if ($facultyFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'faculty', $facultyFilterInp.value)
  }
  if ($yearStudyFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'yearStudy', $yearStudyFilterInp.value)
  }

  // Отрисовка
  for (const oneUser of copyListData) {
    const $newTr = createUserTr(oneUser)
    $tableBody.append($newTr)
  }
}
render(listData);

// Добавление
$addForm.addEventListener('submit', async event => {
  event.preventDefault()
  $tableBody.innerHTML = '';

  // Валидация
  if ($nameInp.value.trim() == "") {
    alert('Имя не введено!')
    return
  }

  if ($surenameInp.value.trim() == "") {
    alert('Фамилия не введено!')
    return
  }

  if ($lastnameInp.value.trim() == "") {
    alert('Отчество не введено!')
    return
  }

  if ($facultyInp.value.trim() == "") {
    alert('Факультет не введено!')
    return
  }

  const response = await fetch('http://localhost:3000/api/students', {
    method: 'POST',
    body: JSON.stringify({
      name: $nameInp.value.trim(),
      surname: $surenameInp.value.trim(),
      lastname: $lastnameInp.value.trim(),
      faculty: $facultyInp.value.trim(),
      birthday: $birthdayInp.valueAsDate,
      yearStudy: +$yearStudyInp.value.trim(),
    }),
    headers: { 'Content-Type': 'application/json' },
  })

  const studentsItem = await response.json();
  console.log(studentsItem)

  listData.push({
    name: $nameInp.value.toLowerCase().trim(),
    surename: $surenameInp.value.toLowerCase().trim(),
    lastname: $lastnameInp.value.toLowerCase().trim(),
    faculty: $facultyInp.value.toLowerCase().trim(),
    birthday: $birthdayInp.valueAsDate,
    yearStudy: +$yearStudyInp.value.trim(),
  })
  render(listData);

  $nameInp.value = "";
  $surenameInp.value = "";
  $lastnameInp.value = "";
  $facultyInp.value = "";
  $birthdayInp.value = "";
  $yearStudyInp.value = "";
})

// Клики сортировки
$sortFIOBtn.addEventListener('click', function () {
  sortColumnFlag = 'fio'
  sortDirFlag = !sortDirFlag
  render(listData)
})

$sortFacultyBtn.addEventListener('click', function () {
  sortColumnFlag = 'faculty'
  sortDirFlag = !sortDirFlag
  render(listData)
})

$sortbirthdayBtn.addEventListener('click', function () {
  sortColumnFlag = 'birthday'
  sortDirFlag = !sortDirFlag
  render(listData)
})
$sortYearStudyBtn.addEventListener('click', function () {
  sortColumnFlag = 'yearStudy'
  sortDirFlag = !sortDirFlag
  render(listData)
})

$sortStudyEndBtn.addEventListener('click', function () {
  sortColumnFlag = 'numberEndCourse';
  sortDirFlag = !sortDirFlag
  render(listData)
})

// Фильтрация
$filterForm.addEventListener('submit', function (event) {
  event.preventDefault()
})
$fioFilterInp.addEventListener('input', function () {
  render(listData)
})
$facultyFilterInp.addEventListener('input', function () {
  render(listData)
})
$yearStudyFilterInp.addEventListener('input', function () {
  render(listData)
})
