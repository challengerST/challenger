/* global fullpage */
"use strict";
window.onload = function () {
  fullpage.init('#sectionContent', {
    pageSpeed: 1000,
    // autoScroll: 1,
    beforeLeave: function (leaveIndex, nowIndex) {
      if (nowIndex === 2) {
        //console.log('You will leave page 2');
      }
      //console.log(this, leaveIndex, nowIndex);
    },
    afterLoad: function (afterIndex) {
      if (afterIndex === 2) {
        //console.log('You will go to page 2');
      }
      //console.log(this, afterIndex);
    },
    beforeSlideLeave: function (pageIndex, slideNow, slideAfter) {
      var _this = this;
      var SlideNow = document.querySelector('#nowSlide');
      SlideNow.innerHTML = 'Slide' + slideAfter;
    },
    afterSlideLoad: function (pageIndex, slideIndex) {
      var _this = this;
    }
  });
};
