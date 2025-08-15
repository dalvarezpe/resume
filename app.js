document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const exampleLinks = document.querySelectorAll('.example-link');
    const navIndicadores = document.getElementById('nav-indicadores');

    // URL de tu túnel Cloudflare (cámbiala por la correcta cuando cambie)
    const TUNNEL_URL = 'https://app.escalardata.com/';
    
    // Manejar búsqueda desde el formulario
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if(query) {
            window.location.href = `${TUNNEL_URL}/buscar?q=${encodeURIComponent(query)}`;
        }
    });

    // Manejar ejemplos de búsqueda
    exampleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const query = this.textContent;
            searchInput.value = query;
            window.location.href = `${TUNNEL_URL}/buscar?q=${encodeURIComponent(query)}`;
        });
    });

    // Redirigir el menú "Indicadores" al buscador
    navIndicadores.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = `${TUNNEL_URL}/buscar`;
    });
});