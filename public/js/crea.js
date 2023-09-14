import { crearPublicaciones } from './crud-post.js';


// Referencia a elemento formulario de nueva publicación
const formNuevaPub = document.querySelector('#form-nuevo');

formNuevaPub.addEventListener('submit', async (e) => {
    e.preventDefault();

    const tituloAux = document.querySelector('#titulo').value;
    const detalleAux = document.querySelector('#detalle').value;
    const url_imagenAux = document.querySelector('#url_imagen').value;
    const fecha_publicacionAux = document.querySelector('#fecha_publicacion').value;

    if (tituloAux !== "" && detalleAux !== "" && url_imagenAux !== "" && fecha_publicacionAux !== "") {
        const data = {
                titulo: tituloAux,
                detalle: detalleAux,
                url_imagen: url_imagenAux,
                fecha_publicacion: fecha_publicacionAux,
        }
        const respuesta = await crearPublicaciones(data)
        
        alert(respuesta.msg);
        location.href='/index'
    } 
});

