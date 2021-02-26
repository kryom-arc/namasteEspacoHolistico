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



// fotos ////////////////////////////////////////////////////////////////////////////////////////////////////////
let fotos = document.getElementById('fotos');
let fotosBlackOut = document.querySelector('.foto-exibicao-container');
let area = document.querySelector('.foto-exibicao');
fotos.addEventListener('click', (e) => {
    let exit = '<div class="exit flex center align-center"><i class="fas fa-times"></i></div>';
    let x = '<i class="fas fa-times"></i>';
    // let width = window.getComputedStyle(area).getPropertyValue('width');
    // let height = window.getComputedStyle(area).getPropertyValue('height');
    // console.log(height);
    // if (window.innerWidth <= 1140) {
    //     area.style.top = `${(100 - height) / 2}vh`;
    // }
    // area.style.left = `${(100 - width) / 2}vw`;
    
    
    let images = document.querySelectorAll('.foto');
    let imagesArray = Object.values(images);
    let width = e.target.naturalWidth;
    let height = e.target.naturalHeight;
    if (imagesArray.some( i => i === e.target)) {
        area.style.maxWidth = '95vw';
        if (width > height) {
            if (screen.width <= 950) {
                area.style.width = '80vh';
                area.style.height = '60vh';
            } else if (screen.width <= 1200) {
                area.style.width = '110vh';
                area.style.height = '70vh';
            } else if (screen.width > 1200) {
                area.style.width = '140vh';
                area.style.height = '90vh';
            }
        } else if (height > width) {
            if (screen.width > 950) {
                area.style.width = '80vh';
                area.style.height = '95vh';
            } else {
                area.style.width = '70vh';
                area.style.height = '80vh';
            }
        } else if (height === width) {
            area.style.width = '90vh';
            area.style.height = '90vh';
        }
    }




    if (screen.width > 500) {
        if (e.target.currentSrc) {
            area.style.display = 'flex';
            area.innerHTML = `'<img src="${e.target.currentSrc}" alt="">'${exit}`;
            fotosBlackOut.style.display = 'flex';
        } else if (e.target === x || !e.target.currentSrc){
            area.style.display = 'none';
            area.innerHTML = '';
            fotosBlackOut.style.display = 'none';
        }
    }
});
