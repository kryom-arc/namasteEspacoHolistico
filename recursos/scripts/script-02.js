// header scroll function ///////////////////////////////////////////////////////////////////////////////////////
document.body.onscroll = () => {
    let header = document.querySelector("header .header");
    let logoArea = document.querySelector('.header .logo-area');
    if (window.pageYOffset > 200) {
        header.style.backgroundColor = '#9E6583';
        logoArea.style.height = '90px';
        logoArea.style.width = '140px';
        header.style.height = '100px';
    } else {
        header.style.backgroundColor = '';
        logoArea.style.height = '';
        logoArea.style.width = '';
        header.style.height = '';
    }
}

// header sandwich menu //////////////////////////////////////////////////////////////////////////////////////
let body = document.querySelector('body');
body.addEventListener('click', (e) => {
    let sandwich = document.querySelector('.sandwich-menu');
    let sandwichBar = Object.values(sandwich.children);
    let nav = document.querySelector('.nav');
    let navDescendant = Object.values(nav.querySelectorAll('*'));
    let contatos = document.querySelector("a[href='#contatos']");
    if (e.target == sandwich || sandwichBar.some( (x) => x === e.target ) ) {
        if (nav.style.display === 'none' || nav.style.display === '' || window.getComputedStyle(nav).getPropertyValue('display') === 'none') {
            nav.style.display = 'flex';
        } else if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } 
    } else if ( (e.target === contatos) || (e.target !== sandwich || sandwichBar.some( x => x !== e.target)) && e.target !== nav && (!navDescendant.some(d => d === e.target)) ) {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        }
    }
});