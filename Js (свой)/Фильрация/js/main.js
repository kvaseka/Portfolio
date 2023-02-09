const users = [
  {
    fio: 'Кюндяйцев Василий Анатольевич',
    age: 22,
  },
  {
    fio: 'Кюндяйцев Анатолий Васильевич',
    age: 45,
  },
  {
    fio: 'Кюндяйцев Вячеслав Анатольевич',
    age: 16,
  },
  {
    fio: 'Сивцева Акулина Михайловна',
    age: 45,
  },
  {
    fio: 'Кюндяйцев Ян Анатольевич',
    age: 3,
  }
]

function filter(arr, prop, value) {
  let result = []
  let copy = [...arr]
  for (const item of copy) {
    if (String(item[prop]).includes(value) == true) result.push(item)
  }
  return result
}

function render(arr) {
  const list = document.querySelector('.users-list')
  list.innerHTML = ''

  const fioVal = document.getElementById('inp-fio').value
  const ageVal = document.getElementById('inp-age').value

  let newArr = [...arr]
  if (fioVal !=='') newArr = filter(newArr, 'fio', fioVal)
  if (ageVal !=='') newArr = filter(newArr, 'age', ageVal)

  for (const user of newArr ) {
    const li = document.createElement('li')
    li.textContent = user.fio + ', age: ' + user.age
    list.append(li)
  }
}

document.getElementById('filter-form').addEventListener('submit', function(event){
  event.preventDefault()
  render(users)
})

render(users)