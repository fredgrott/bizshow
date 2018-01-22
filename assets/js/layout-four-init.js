/*
    BizShow
    Fred Grott
    0.0.1

    Note: Because we are targeting modern browsers along with
          MSIE 10-11 most of our javascript plugin initializations
          have to go outside of any doc redady function.

          Its only the Bootstrap Material Design itself and the
          included plugins with BSM that can be initializeed within
          the doc ready block.

          Otherwise, none of the other plugins work with MSIE 10-11.

    0 es5-es6 adjustment
    1 BSM initialization
    2 AOS initialization
    3 BalanceText initialization
    4 Textillate Initialization
    5 Bounce Initialization
*/

/* 0 es5-es6 adjustment */
'use strict';

/* ! BSM initialization */
$( document ).ready(function() {
  $('body').bootstrapMaterialDesign();


});

/* 2 AOS initialization */
AOS.init();

/* 3 Balance Text initialization */
balanceText();

/* 4 Textillate Initialization */
$('.hero-phrase').textillate({
  type: 'char',
  in: {




    // set the delay between each character
    delay: 350,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,


  },
});

/* 5 Bounce Initialization */

var bounce = new Bounce();
bounce
  .translate({
    from: { x: 0, y: -170 },
    to: { x: 0, y: 0 },
    duration: 12600,
    stiffness: 4
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: "sway",
    duration: 19800,
    delay: 65,
    stiffness: 2
  })
  .scale({
    from: { x: 1, y: 1},
    to: { x: 5, y: 1 },
    easing: "sway",
    duration: 19300,
    delay: 30,
  })
 .applyTo(document.querySelectorAll(".hero-title"));
