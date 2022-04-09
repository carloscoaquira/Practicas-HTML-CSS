document.querySelector('.bars').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show')
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.container', { delay: 300 });