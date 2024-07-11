var seccion = document.getElementById('seccion-carrusel');
var container_interno = document.getElementById('carrusel');

var presionado = false;
var inicioX;
var scrollIz;

container_interno.addEventListener('mousedown', (e) => {
	presionado = true;
	inicioX = e.pageX - container_interno.offsetLeft;
	scrollIz = container_interno.scrollLeft;
	seccion.style.userSelect = 'none';
})

container_interno.addEventListener('mouseup', () => {
	presionado = false;
})

container_interno.addEventListener('mousemove', (e) => {
	if (!presionado) return;
	e.preventDefault();
	const x = e.pageX - container_interno.offsetLeft;
	const walk = (x - inicioX) * 3;
	container_interno.scrollLeft = scrollIz - walk;
})