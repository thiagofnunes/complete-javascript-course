'use strict';

const hiddenModal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const hiddenOverlay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');

function showOverlayAndModal() {
    hiddenModal.classList.remove('hidden'); //CSS Style
    hiddenOverlay.classList.remove('hidden');  //CSS Style
    //hiddenModal.style.display = 'none'
}

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', function () {
        showOverlayAndModal();
    })
}

function hideModalAndOverlay() {
    hiddenModal.classList.add('hidden');  //CSS Style
    hiddenOverlay.classList.add('hidden'); //CSS Style
}

closeModalBtn.addEventListener('click', hideModalAndOverlay);
hiddenOverlay.addEventListener('click', hideModalAndOverlay);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !hiddenModal.classList.contains('hidden')) {
        hideModalAndOverlay();
    }
})