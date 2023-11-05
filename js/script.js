const btnDarkMode = document.querySelector('button.btn-darkmode');
const footer = document.querySelector('footer');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('darkmode-active');
    footer.classList.toggle('bg-darker-color');
    btnDarkMode.classList.toggle('btn-darkmode-clicked');
})