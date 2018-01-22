/*  BizShow
    Fred Grott
    0.0.1

*/

/* 0 transition to es5/es6 setting */
'use strict';


/* 1 BSM initialization */
$( document ).ready(function() {
     $('body').bootstrapMaterialDesign();
});

/* 2 Stickyfill polyfill initialization */
Stickyfill.add($('.sticky'));

/* 3 tocbot initialization */
tocbot.init({
         // Where to render the table of contents.
          tocSelector: '.our-toc',
         // Where to grab the headings to build the table of contents.
          contentSelector: '.bizshow-docs-content',
          // Which headings to grab inside of the contentSelector element.
         headingSelector: 'h1, h2, h3,h4,h5,h6',
         ignoreSelector: '.js-toc-ignore',

         collapseDepth: 6,
});

/* 4 jstree initialization */
$('#bizshow-files').jstree();
