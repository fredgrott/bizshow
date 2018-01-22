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

$('.hero-title').textillate({
  type: 'word',
  in: {




    // set the delay between each character
    delay: 1250,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,


  },


});
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
