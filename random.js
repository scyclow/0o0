$(function() {
  var TIME = 0.1;
  var SIZE = 200;
  var PROB = 0.3;
  // test.css('background-color', randColor())

  function randSec(max) {
    var second = 1000;
    return Math.random()*second * max;
  }

  function randPx(max) {
    var number = Math.random()*max;
    return number + 'px';
  }

  function randColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randExec(cmd) {
    if (Math.random() < PROB) {
      return cmd
    } else {
      return
    }
  }


  function draw() {
    var test = $('div.test');

    randExec(test.css('background-color', randColor()));
    randExec(test.css('border-radius', randPx(SIZE)));
    randExec(test.css('height', randPx(SIZE)));
    randExec(test.css('width', randPx(SIZE)));

    var windowH = $(window).height()/10;
    var windowW = $(window).width();
    // randExec(test.css('margin-left', randPx(windowW)));
    // randExec(test.css('margin-top', randPx(windowH)));

    randExec($('body').css('background-color', randColor()));
  }

  setInterval(draw, randSec(TIME));

});