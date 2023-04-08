const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal')
const modalContainer = document.querySelector('.modal-container');

openModal.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})