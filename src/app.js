/* src/app.js */

// Styles
import './scss/main.scss';
import './assets/scripts/demo';

$(document).ready(() => {

  /* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */
//-Sticky navigation bar
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('nav').removeClass('fixed-header');
      $('nav div').removeClass('visible-title');
  }
});

//-Hero banner with parallax scrolling
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.15)+'px');
}

  console.log('Ready!');

  require('./assets/scripts/demo');
});
