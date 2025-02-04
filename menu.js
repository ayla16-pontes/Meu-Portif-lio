let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

//Seção de recarregar  página no navegador//
window.onload = function() {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Espera 100ms antes de rolar suavemente para o topo
};

//Seção de Menu
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu')
})

// Fecha o menu ao clicar no "X" ou no overlay
menu.addEventListener('click', (event) => {
    menu.classList.remove('open-menu');
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu');
})

 // Fecha o menu ao clicar nos links e faz a rolagem suave até a seção//
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Pega o ID da seção
        const targetElement = document.querySelector(targetId); // Seleciona a seção correspondente

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Faz a rolagem suave até a seção
        }

    });
});

function smoothScrollAndReload() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let checkScroll = setInterval(() => {
        if (window.scrollY === 0) { // Quando chegar ao topo
            clearInterval(checkScroll); // Para de verificar
            location.reload(); // Recarrega a página
        }
    }, 100); // Verifica a cada 100ms
}

