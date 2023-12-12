/**
 * @file
 * Provides functionality for the reverse pyramid.
 */

(function () {

  'use strict';

  /**
   * Prepares gallery.
   */
  function printReversePyramid(e) {
    e.preventDefault();
    const ctaElement = document.querySelector('.size');
    const size = parseInt(ctaElement.value, 10);
    if (!size) {
      return;
    }

    // Create reverse pyramid.
    let reversePyramid = '';
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < i; j++) {
        row += '\xA0'; // Non-breaking space.
      }
      for (let j = i; j < size; j++) {
        row += '* ';
      }
      row += '\n'; // Newline character.
      reversePyramid += row;
      console.log(i, row);
    }

    // Add reverse pyramid on page.
    const reversePyramidWrapper = document.querySelector('.reverse-pyramid-wrapper');
    reversePyramidWrapper.innerText = '';
    reversePyramidWrapper.innerText = reversePyramid;

    // Add class on body.
    document.body.classList.add('reverse-pyramid-on');
  }

  // Submit event for form.
  const form = document.querySelector('form.reverse-pyramid');
  form.addEventListener('submit', printReversePyramid);

})();
