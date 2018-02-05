$(document).ready(function () {

  var letters = $('.bg-letter');

  //  console.log(letters[2]);

  setInterval(function () {
    sparkle(letters);
  }, 40);

  var index = 0;
  setInterval(function () {
    if (index == 0) {
      $('.refest').text('Refest 2018');
      $('.adress img').src = 'img/OBJ3.png';
      index = 1;
    } else {
      $('.refest').text('6-8.04 Kraków');
      $('.adress img').src = 'img/Golik%C3%B3wka%2012.png';
      index = 0;
    }
  }, 5000);

})

var rand = function () {
  return Math.floor(Math.random() * 6);
};


var sparkle = function (letters) {
  var letter1, letter2, letter3, letter4, letter5;
  //    console.log('disappear')
  letter1 = letters[rand()];
  ////    letter2 = letters[rand()];
  ////    letter3 = letters[rand()];
  ////    letter4 = letters[rand()];
  ////    letter5 = letters[rand()];
  letter1.addClass('disappear');
  ////    letter2.css('opacity', 0);
  ////    letter3.css('opacity', 0);
  ////    letter4.css('opacity', 0);
  ////    letter5.css('opacity', 0);
  setTimeout(function () {
    //      console.log('appear')
    letter1.removeClass('disappear');
    ////      letter2.css('opacity', 1);
    ////      letter3.css('opacity', 1);
    ////      letter4.css('opacity', 1);
    ////      letter5.css('opacity', 1);
  }, 40);
};
