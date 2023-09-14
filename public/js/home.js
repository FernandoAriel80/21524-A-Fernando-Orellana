import { obtenerPublicaciones,mostrarDatosPublicaciones/*,eliminarPublicacion*/} from './crud-post.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Cargado!")
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarDatosPublicaciones(publicaciones, main)
})



const btn_filtroFecha = document.querySelector('#btn_filtroFecha')

btn_filtroFecha.addEventListener('click', (e)=>{
    e.preventDefault();

    const navFecha = document.getElementById('nav_fecha')
    
    if (navFecha.style.visibility== "hidden") {
        navFecha.style.visibility="visible";
    }else if(navFecha.style.visibility== "visible") {
        navFecha.style.visibility="hidden";
    } 
})
/*
const btn_buscaFecha = document.querySelector('#formFecha')

btn_buscaFecha.addEventListener('submit', async(e)=>{
    e.preventDefault();

    var dato ={
      fecha_publicacion : document.querySelector('#fecha_publicacion').value
    } 
   const publicaciones = await obtenerPublicaciones(dato)
    const main = document.querySelector('#lista-publicaciones')
    mostrarDatosPublicaciones(publicaciones, main)
    
})*/




/* Evento que se utilizaria para traer los datos del from para poder eliminar
  pero no pude obtener el id de la publicacion a si que quedo sin usar*/ 

 /* function eliminarPublicaciones(id_actual){

    const respuesta = eliminarPublicacion(id_actual);

    alert(respuesta.msg);
    console.log(id_actual);
    location.href='/index'
}*/





