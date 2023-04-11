import '../scss/app.scss';

/* Your JS Code goes here */
const modal =  document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal =  document.querySelector('.close-modal');
const btnsOpenModal =  document.querySelectorAll('.show-modal');

// add pop-up window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// remove pop-up window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// add pop-up window when clicking on button
for(let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
};

// remove pop-up window by clicking on cross
btnsCloseModal.addEventListener('click', closeModal);

// remove pop-up window by clicking outside
overlay.addEventListener('click', closeModal);

// remove pop-up window by hitting escape
document.addEventListener('keydown', function (e) {
  if (e.key ===  'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Select2
$(document).ready(function() { 
  $('.subscribe_select').select2({
    minimumResultsForSearch: Infinity
  });
});

/* Demo JS */
import './demo.js';
