/*select*/
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  classNames: {
    containerOuter: 'choices header_choices',
  },
});

/*map*/
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.872185, 2.354224],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16

  });

  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

/*form*/
console.log('Init!');
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputMask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#FF5C00',
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Здесь должно быть 10 символов без +7'
    },
    email: {
      required: 'Укажите ваш e-mail',
      email: 'Введите корректный email'
    }
  },
  submitHandler: function (thisForm) {
  }
})
