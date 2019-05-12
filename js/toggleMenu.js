window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var body = document.querySelector('body'),
    phone = document.querySelector('.header-phone'),
    menu = document.querySelector('.nav-items'),
    panel = document.querySelector('.header-panel');

  toggleMenu();
  window.addEventListener('resize', function () {
    toggleMenu();
  });

  function toggleMenu() {
    if (window.innerWidth <= 450) {
      panel.appendChild(phone);
    } else {
      menu.appendChild(phone);
    }
  }

  var btn_toggle = document.querySelector('.header__toggle');

  function openMenu() {
    menu.classList.add('menu-down');
    btn_toggle.classList.add('toggle-transform');
    panel.style.justifyContent = "space-between";
  }

  function closeMenu() {
    menu.classList.remove('menu-down');
    btn_toggle.classList.remove('toggle-transform');
    panel.style.justifyContent = "flex-start";
  }

  function parentsOfElements(elem, cl) {
    let curr = elem;
    while (curr != null) {
      if (curr.classList.contains(cl)) {
        return true;
      }
      curr = curr.parentElement;
    }
    return false;
  }

  btn_toggle.addEventListener('click', function () {
    if (window.innerWidth <= 450) {
      if (parseInt(getComputedStyle(menu).top) < 0) {
        openMenu();
      } else {
        closeMenu();
      }
    }
  });

  body.addEventListener("click", function (e) {
    if (window.innerWidth <= 450) {
      if (parseInt(getComputedStyle(menu).top) >= 0) {
        if (!parentsOfElements(e.target, "nav-items") &&
          !e.target.classList.contains("header__toggle") &&
          !e.target.classList.contains("header-phone")) {
          closeMenu();
        }
      }
    }
  });
});