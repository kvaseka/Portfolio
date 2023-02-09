(function () {
  let listArray = [],
    listName = '';

  // создаём и возрващаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    
    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  };

  // создаём и возрващаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  };

  function createTodoItem(todoI, { onDone, onDelete }) {
    const doneClass = 'list-group-item-success';

    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его прваой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    if (todoI.done) {
      item.classList.add(doneClass)
    }

    item.textContent = todoI.name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готовооо!';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалииить!';


    //Добавляем обработчики на кнопки 
    doneButton.addEventListener('click', () => {
      onDone({ todoI, element: item });
      item.classList.toggle(doneClass, todoI.done);
    });
    deleteButton.addEventListener('click', () => {
      onDelete({ todoI, element: item });
    });

    // вкладываем кнопки в отдельный элемент, чтобы они обьединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return item;
  };

  async function createTodoApp(container, title, owner) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    let handlers = {
      onDone({ todoI }) {
        todoI.done = !todoI.done;
        fetch(`http://localhost:3000/api/todos/${todoI.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ done: todoI.done }),
          headers: {
            'Content-Type': 'application/json',
          }
        });
      },
      onDelete({ todoI, element }) {
        if (!confirm('Вы уверены?')) {
          return;
        }
        element.remove();
        fetch(`http://localhost:3000/api/todos/${todoI.id}`, {
          method: 'DELETE',
        });
      },
    }

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    //Отправляем запрос на список всех дел
    const response = await fetch(`http://localhost:3000/api/todos?owner=${owner}`);
    const todoItemList = await response.json();

    todoItemList.forEach(todoI => {
      const todoItem = createTodoItem(todoI, handlers);
      todoList.append(todoItem);
    });

    // браузер создаёт событие sumbit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', async e => {
      // эта строчка необходима чтобы предотвратить стандартное действие браузера
      // в данном случае мы не хотим, чтобы страницы перезагружалась при отправке формы
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввёл в поле ввода
      if (!todoItemForm.input.value) {
        return;
      };

      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        body: JSON.stringify({
          name: todoItemForm.input.value.trim(),
          owner,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const todoI = await response.json();

      let todoItem = createTodoItem(todoI, handlers);

      // создаём и добавляем в список новое дело с названием из поля для ввода
      todoList.append(todoItem);

      // обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';

      saveList(listArray);
    })

    let localData = localStorage.getItem(listName);

    if (localData != "" && localData !== null) {
      listArray = JSON.parse(localData);
    }

    if (listArray.length > 0) {
      for (const oneObj of listArray) {
        let todoItem = createTodoItem(oneObj);
        todoList.append(todoItem.item);
      }
    }
  }

  function saveList(arr) {
    localStorage.setItem(listName, JSON.stringify(arr));
  }

  window.createTodoApp = createTodoApp;
})();
