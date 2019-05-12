window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var area = document.querySelector('.elk'),
    elk = document.querySelector('.elk-svg-pattern__img'),
    grow = document.querySelector('.elk-svg-pattern__grow');
  parallax(area, elk, grow);

  function parallax(area, obj1, obj2) {
    area.addEventListener('mousemove', function (e) {
      var xpos = e.clientX;
      var ypos = e.clientY;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      var str = 'translate(' + ((0 - (xpos / 80)) + "px, ") + ((0 - (ypos / 50)) + "px)");
      console.log(str);
      obj1.style.transform = str;
      obj2.style.transform = str;
    })
  }

  
  var phone = document.querySelector('.header-phone'),
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

  btn_toggle.addEventListener('click', function(){
    if (window.innerWidth <= 450) {
      if (parseInt(getComputedStyle(menu).top) < 0){
        menu.classList.add('menu-down');
        // menu.style.top = "0";

        panel.style.justifyContent = "space-between";
      } else {
        menu.classList.remove('menu-down');

        // menu.style.top = "";
        panel.style.justifyContent = "flex-start";
      }
    }
  })
});