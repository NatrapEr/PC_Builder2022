const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalOpen = document.querySelectorAll('.modal__button');
const modalBody = document.querySelector('body');

modalOpen.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        modalBody.classList.add('noscroll');
    })
})

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    modalBody.classList.remove('noscroll');
} );

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if (!isModal) {
        modalWindow.style.display = 'none';
        modalBody.classList.remove('noscroll');
    }
})