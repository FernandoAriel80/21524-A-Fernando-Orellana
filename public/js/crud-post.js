export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async (datos) => {
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json(datos);
    return publicaciones
}

export const obtenerUsuario = async (datos) => {
    const response = await fetch('/usuario')

    const data = await response.json(datos)
    return data;
}


export const comparaLogin = (adminUser, datos) => {
 
    if (adminUser[0].usuario == datos.usuario && adminUser[0].clave == datos.clave ) {
        return true;
    }else{
        return false;
    }
    
}
/*las funciones actualizar y eliminar estar echas pero como no super 
    como resolver el de recuperar el id del producto no lo pude implementar*/
/*
export const actualizarPublicacion = async (id,datosActualizados) => {
    const response = await fetch(`/actualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datosActualizados)
    })

    const data = await response.json()
    return data;
  
}

 export const eliminarPublicacion= async(id) =>{
    const response = await fetch(`/eliminar/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json()
    return data;
  
}
*/
// FUNCIONES PARA MOSTRAR DATOS 

/* En esta funcion habia puesto un boton para borrar la publicacion, pero no pude
    obtener el valor del id de la publicacion que traia de la base de datos, 
    me dice que el evento click que cree para recibirla espera valores nulos, a si que la oculte*/


  export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
        let registros = '';
        publicaciones.forEach(pub => {
            registros += `
            <div style="margin-bottom:20px; background-color:#DCDCDC; padding:20px; ">
                <div>
                    <p>Fecha de la publicacion: ${pub.fecha_publicacion}</p>
                </div>
                <section class="d-flex gap-2">
                    <img src="${pub.url_imagen}" class="rounded" height="300" width="400">
                    <div class="flex-column gap-2">
                        <div class="flex-column text-center"><h4>${pub.titulo}</h4></div>
                        <p>${pub.detalle}</p>
                    </div>
                </section>
                <!--- Aca queria recuperar el id de la publicacion para poder eliminar una publicacion pero se perdia el valor 
                      porque el listenerEvent que cree dice que espera un valor null.
                ---> 
                <!---   
                <div class="d-flex justify-content-end">
                    <a href="/publicacion/editar/${pub.id_publicacion}" class="btn btn-primary">Editar</a>
                    <a href="#" class="btn btn-danger" onclick="eliminarPublicaciones(${pub.id_publicacion})">Eliminar</a>
                </div>
                --->
                
            </div>
            `
        })
       
        elemento.innerHTML = registros
    }

    