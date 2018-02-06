$(document).ready(function () {

  moveBackground();
  setInterval(function () {
    sparklingLetters();
  }, 400);

  var index1 = 0, index2 = 0;
  
  setInterval(function () {
    if (index1 == 0) {
      $('.refest').replaceWith('<div class="refest">Refest 2018</div>');
      index1 = 1;
    } else {
      $('.refest').replaceWith('<div class="refest">6-8.04 Kraków</div>');
      index1 = 0;
    }
  }, 5000);
  
  setInterval(function () {
    if (index2 == 0) {
      $('.adress img').replaceWith('<div class="adress"><img src="img/OBJ3.png"/></div>');
      index2 = 1;
    } else {
      $('.adress img').replaceWith('<div class="adress"><img src="img/Golik%C3%B3wka%2012.png"/></div>');
      index2 = 0;
    }
  }, 6000);

})

var rand = function () {
  return Math.floor(Math.random() * 30000);
};


var sparklingLetters = function () {
//  $('.bg-letter1').addClass('disappear');
//  setTimeout(function () {
//    $('.bg-letter1').removeClass('disappear');
//  }, rand());
  $('.bg-letter2').addClass('disappear');
  setTimeout(function () {
    $('.bg-letter2').removeClass('disappear');
  }, rand());
  $('.bg-letter3').addClass('disappear');
  setTimeout(function () {
    $('.bg-letter3').removeClass('disappear');
  }, rand());
//  $('.bg-letter4').addClass('disappear');
//  setTimeout(function () {
//    $('.bg-letter4').removeClass('disappear');
//  }, rand());
  $('.bg-letter5').addClass('disappear');
  setTimeout(function () {
    $('.bg-letter5').removeClass('disappear');
  }, rand());
//  $('.bg-letter6').addClass('disappear');
//  setTimeout(function () {
//    $('.bg-letter6').removeClass('disappear');
//  }, rand());
  $('.bg-letter7').addClass('disappear');
  setTimeout(function () {
    $('.bg-letter7').removeClass('disappear');
  }, rand());
//  $('.bg-letter8').addClass('disappear');
//  setTimeout(function () {
//    $('.bg-letter8').removeClass('disappear');
//  }, rand());
  $('.bg-letter9').addClass('disappear');
  setTimeout(function () {
    $('.bg-letter9').removeClass('disappear');
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
    $(".refest").css({
      "background-position": traX + "%" + traY + "%"
    });
  });
};
