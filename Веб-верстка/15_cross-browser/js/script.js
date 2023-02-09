/* hero */
const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})

/* work */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('work__item--active')
      });
      event.currentTarget.classList.add('work__item--active');

      document.querySelectorAll('.tabs-item').forEach(function (tabsItem) {
        tabsItem.classList.remove('tabs-item--active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });
});


/* ask */
$(".accordion").accordion({
  heightStyle: "content",
  icons: false,
  heightStyle: "content",
  collapsible: true,
  active: false,
});

/* burger */
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector(".header__close").addEventListener("click", function () {
    document.querySelector("#menu").classList.remove("is-active");
  })
})

/*search*/
document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})

document.querySelector(".header__btn-open").addEventListener("click", function () {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".header__btn-close").addEventListener("click", function () {
  document.querySelector(".header__form").classList.remove("form__active");
  this.classList.add("active");
  document.querySelector(".header__btn-open").classList.remove("active")
})
