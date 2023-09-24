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


  export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
        let registros = '';
        publicaciones.forEach(pub => {
            registros += `
            <div style="margin-bottom:20px; background-color:#DCDCDC; padding:20px; ">
                <div>
                    <p>Fecha de la publicacion: ${pub.fecha_publicacion}</p>
                    <p>${pub.autor}</p>
                </div>
                <section class="d-flex gap-2">
                    <img src="${pub.url_imagen}" class="rounded" height="300" width="400">
                    <div class="flex-column gap-2">
                        <div class="flex-column text-center"><h4>${pub.titulo}</h4></div>
                        <p>${pub.detalle}</p>
                    </div>
                </section>
            </div>
            `
        })
       
        elemento.innerHTML = registros
    }

    