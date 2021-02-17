// header scroll function ///////////////////////////////////////////////////////////////////////////////////////
document.body.onscroll = () => {
    let header = document.querySelector("header .header");
    let logoArea = document.querySelector('.header .logo-area');
    if (window.pageYOffset > 200) {
        // header.style.backgroundImage = "url('./recursos/imagens/complementares/zdenek-machacek-D9gKmhEavyU-unsplash.jpg')";
        // header.style.backgroundPosition = 'top';
        // header.style.backgroundSize = 'cover';
        // header.style.backgroundColor = '#DF8E95';
        header.style.backgroundColor = '#9E6583';
        logoArea.style.height = '90px';
        header.style.height = '100px';
    } else {
        // header.style.backgroundImage = '';
        // header.style.backgroundPosition = '';
        // header.style.backgroundSize = '';
        header.style.backgroundColor = '';
        logoArea.style.height = '';
        header.style.height = '';
    }
}

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
    if (e.target.currentSrc) {
        area.style.display = 'flex';
        area.innerHTML = `'<img src="${e.target.currentSrc}" alt="">'${exit}`;
        fotosBlackOut.style.display = 'flex';
    } else if (e.target === x || !e.target.currentSrc){
        area.style.display = 'none';
        area.innerHTML = '';
        fotosBlackOut.style.display = 'none';
    }
});
