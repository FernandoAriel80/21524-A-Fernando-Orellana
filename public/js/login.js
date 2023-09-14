import { obtenerUsuario,comparaLogin} from './crud-post.js';

// Referencia a elemento formulario de nueva publicación
const login = document.querySelector('#formLogin');

login.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        usuario: document.querySelector('#usuario').value,
        clave: document.querySelector('#clave').value,
    }
    const respuesta =  await obtenerUsuario(data);
    const resultado = comparaLogin(respuesta,data);
    if (resultado) {
        console.log("Se encontro el usuario correctamente");
        location.href='/crea'
    } else {
        console.log("No se encontro usuario");
    }
});

