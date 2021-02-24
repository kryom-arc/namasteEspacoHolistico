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
let sandwich = document.querySelector('.sandwich-menu');
sandwich.addEventListener('click', (e) => {
    let nav = document.querySelector('.nav');
    if (nav.style.display === 'none' || nav.style.display === '' || window.getComputedStyle(nav).getPropertyValue('display') === 'none') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});