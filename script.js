$(document).ready(function () {
  moveBackground();
  setInterval(function () {
    sparklingLetters();
  }, 1000);
  var index1 = 0,
    index2 = 0;
  setInterval(function () {
    if (index1 == 0) {
      $('.refest-title').replaceWith('<div class="refest-title">Refest 2018</div>');
      index1 = 1;
    } else {
      $('.refest-title').replaceWith('<div class="refest-title">6-8.04 Kraków</div>');
      index1 = 0;
    }
  }, 5000);
  setInterval(function () {
    if (index2 == 0) {
      $('.adress img').attr('src', 'img/OBJ3.png');
      index2 = 1;
    } else {
      $('.adress img').attr('src', 'img/Golik%C3%B3wka%2012.png');
      index2 = 0;
    }
  }, 6000);
})


var rand = function () {
  return Math.floor(Math.random() * 30000);
};

var sparkleClass = function (className) {
  $(className).addClass('disappear');
  setTimeout(function () {
    $(className).removeClass('disappear');
  }, rand());
}

var sparklingLetters = function () {
  setTimeout(function () {
    sparkleClass('.bg-letter1');
  }, rand());
  setTimeout(function () {
    sparkleClass('.bg-letter2');
    sparkleClass('.bg-letter3');
  }, rand());
  setTimeout(function () {
    sparkleClass('.bg-letter4');
    sparkleClass('.bg-letter5');
  }, rand());
  sparkleClass('.bg-letter6');
  sparkleClass('.bg-letter7');
  sparkleClass('.bg-letter8');
  setTimeout(function () {
    sparkleClass('.bg-letter9');
  }, rand());
};

var moveBackground = function () {
  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    $(".refest-title").css({
      "background-position": traX + "%" + traY + "%"
    });
  });
};
