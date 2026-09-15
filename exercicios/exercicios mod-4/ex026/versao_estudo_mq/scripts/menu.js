const menuBotao = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');
const linksDoMenu = document.querySelectorAll('.menu__link');
const topoBotao = document.querySelector('.topo-botao');

function alternarMenu() {
    const menuAberto = menu.classList.toggle('menu--aberto');
    menuBotao.setAttribute('aria-expanded', menuAberto);
}

function fecharMenuAoNavegar() {
    if (window.innerWidth < 768) {
        menu.classList.remove('menu--aberto');
        menuBotao.setAttribute('aria-expanded', 'false');
    }
}

menuBotao.addEventListener('click', alternarMenu);
linksDoMenu.forEach((link) => link.addEventListener('click', fecharMenuAoNavegar));

topoBotao.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
