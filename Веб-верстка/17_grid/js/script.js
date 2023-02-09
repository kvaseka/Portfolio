/*burger*/
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector(".header__close").addEventListener("click", function () {
    document.querySelector("#menu").classList.remove("is-active");
  })
})
