//Declarando Variáveis
var btnContact = document.querySelector('.bs-btn-contact');
var toggleModal = document.querySelectorAll('.bs-toggle-modal');
var toggleMenu = document.querySelectorAll('.bs-toggle-menu');
var menuMobile = document.querySelector('.bs-menu-mob');
var btnMenuMobIcon = document.querySelector('.bs-btn-menu-mob ion-icon');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.bs-preloader');
    pagePreloder.classList.add('bs-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.bs-contact-info');
    boxContact.classList.toggle('bs-is-open');
    this.classList.toggle('bs-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.bs-menu-overlay');
        overlay.classList.toggle('bs-is-open');
        menuMobile.classList.toggle('bs-menu-is-closed');
        menuMobile.classList.toggle('bs-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}



//Abrindo e Fechando o Modal de Orcamento
/*for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var modalOrcamento = document.querySelector('#bs-modal-orcamento');
        var overlay = document.querySelector('.bs-overlay');
        overlay.classList.toggle('bs-is-open');
        modalOrcamento.classList.toggle('bs-is-open');
        modalOrcamento.classList.toggle('bs-slide-top-in');
    });
}
*/

// Animando Elementos da Topbar
var triggerTopbar = document.querySelector('.bs-trigger-topbar');
var topbar = document.querySelector('.bs-topbar');
var logo = document.querySelector('.bs-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('bs-topbar-bg');
        logo.classList.toggle('bs-logo-shorten');
        logo.classList.toggle('bs-logo-big');
    },
    offset: '50px'
});
