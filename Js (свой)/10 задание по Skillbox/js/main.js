// !!База данных
let listData = [
  {
    name: 'Василий',
    surename: 'Кюндяйцев',
    lastname: 'Анатольевич',
    faculty: 'КиберБезопасность',
    birthday: new Date(2000, 2, 15),
    yearStudy: 2018,
  },
  {
    name: 'Кирилл',
    surename: 'Пинчук',
    lastname: 'Алексеевич',
    faculty: 'Электроника и Наноэлектронка',
    birthday: new Date(2002, 7, 23),
    yearStudy: 2020,
  },
  {
    name: 'Николай',
    surename: 'Черноусов',
    lastname: 'Егорович',
    faculty: 'Космология',
    birthday: new Date(1998, 3, 2),
    yearStudy: 2017,
  },
];
let sortColumnFlag = 'fio'
let sortDirFlag = true
// !!Создане элементов
// Создаем матрешку
const $app = document.getElementById('app')
// Создаем из инпутов элементы, потом туда накидаем данные
const $addForm = document.getElementById('add-form')
const $nameInp = document.getElementById('add-form__name-inp')
const $surenameInp = document.getElementById('add-form__surename-inp')
const $lastnameInp = document.getElementById('add-form__lastname-inp')
const $facultyInp = document.getElementById('add-form__faculty-inp')
const $birthdayInp = document.getElementById('add-form__birthday-inp')
const $yearStudyInp = document.getElementById('add-form__yearStudy-inp')

const $sortFIOBtn = document.getElementById('sort__fio')
const $sortFacultyBtn = document.getElementById('sort__faculty')
const $sortYearStudyBtn = document.getElementById('sort__yearStudy')

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
  $userbirthday.textContent = oneUser.birthday

  if (oneUser.numberCourse > 4) {
    $userYearStudy.textContent = oneUser.yearStudy + ' ' + '(Закончил)'
  } else {
    $userYearStudy.textContent = oneUser.yearStudy + ' ' + '(' + oneUser.numberCourse + ' курс)'
  }

  return $userTr
}

// Фильтрация 
function filter(arr, prop, value) {
  return arr.filter(function (oneUser) {
    if (oneUser[prop].includes(value.trim())) return true
  });
}

// !!Рендер а именно наш массив засовываем в матрешку! (есть несколько этапов подготовка, создание и засовывание чувачков)
function render(arrData) {
  $tableBody.innerHTML = '';
  let copyListData = [...arrData]

  // Подготовка
  for (const oneUser of copyListData) {
    oneUser.fio = oneUser.surename + ' ' + oneUser.name + ' ' + oneUser.lastname
    oneUser.birthday = 2022 - oneUser.birthday
    oneUser.numberCourse = 2022 - oneUser.yearStudy
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
$addForm.addEventListener('submit', function (event) {
  event.preventDefault()

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

  listData.push({
    name: $nameInp.value.trim(),
    surename: $surenameInp.value.trim(),
    lastname: $lastnameInp.value.trim(),
    faculty: $facultyInp.value.trim(),
    birthday: $birthdayInp.value,
    yearStudy: $yearStudyInp.value.trim(),
  })

  render(listData);
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

$sortYearStudyBtn.addEventListener('click', function () {
  sortColumnFlag = 'yearStudy'
  sortDirFlag = !sortDirFlag
  render(listData)
})

// Фильтрацияы
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