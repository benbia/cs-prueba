const headerEl = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
    headerEl.classList.add('header-scrolled')
    } else if (window.scrollY <=20) {
        headerEl.classList.remove('header-scrolled') 
    }
})