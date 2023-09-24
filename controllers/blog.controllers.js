
const Publicacion = require('../models/Publicaciones');

const ctrl = {}


ctrl.newPost = async (req, res) => {
    try {
        const publicacion = await Publicacion.create(req.body);
        
        await publicacion.save()

        res.send({ msg: "Publicación creada con éxito", publicacion })

    } catch (error) {
        //console.log(error);
        return res.status(500).json({
            msg: "Error al crear la publicación"
        })
    }
}

ctrl.getPosts = async (req, res) => {

    try {
        const publicacion = await Publicacion.findAll()
        return res.json(publicacion)
    } catch (error) {
       // console.log(error);
        return res.status(500).json({
            msg: "Error al consultar las publicacion"
        })
    }
}

module.exports = ctrl;