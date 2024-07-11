var buscador = document.getElementById('buscar');

buscador.addEventListener('click', function(){
    buscador.classList.replace('buscar', 'buscar-clickeado');
});

buscador.addEventListener('focusout', function(){
    buscador.classList.replace('buscar-clickeado', 'buscar');
});