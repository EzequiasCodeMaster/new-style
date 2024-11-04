// Função para alternar a exibição do menu
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Fechar o menu quando clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    const menuBtn = document.querySelector('.menu-btn');
    if (menu.style.display === 'block' && !menu.contains(event.target) && event.target !== menuBtn) {
        menu.style.display = 'none';
    }
});
