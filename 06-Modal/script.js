'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// OPEN PopUP
const openPopup = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//CLOSE POPUP
const closePopup = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // console.log('clicked');
};

// OPEN Popup by clicking
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openPopup);
}

// Close popup by clicking cross button, overlay
btnCloseModal.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

// CLOSE USING ESC KEY
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closePopup();
  }
});
