
const Publicacion = require('../models/Publicaciones');
const Admin = require('../models/Admins');
const { Op } = require("sequelize");

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

    const { fecha_publicacion } = req.body;
    try {
        const publicacion = await Publicacion.findAll({fecha_publicacion})
        return res.json(publicacion)
    } catch (error) {
       // console.log(error);
        return res.status(500).json({
            msg: "Error al consultar las publicacion"
        })
    }
}

ctrl.getUsuario = async (req, res) => {

    const { usuario,clave } = req.body;

    try {
        const admin = await Admin.findAll({ [Op.and]: [
            { usuario },
            { clave }
             ]});
        return res.json(admin)
    } catch (error) {
        return res.status(500).json({
            msg: "Error al consultar las admin"
        })
    }
}

/* metodos de actualizar y borrar que no se implementan*/

/*
ctrl.updatePost = async (req, res) => {
    const { id } = req.params;
    const { titulo, detalle, url_imagen, fecha_publicacion } = req.body;
    try {
      await Publicacion.update(
        { titulo, detalle, url_imagen, fecha_publicacion },
        { where: { id } }
      );
      res.send({ msg: "Publicación actualizada", publicacion })
    } catch (error) {
      console.error('Error al editar la publicación:', error);
      res.sendStatus(500);
    }
      
}

ctrl.deletePost = async (req, res) => {

    const { id } = req.params;

    try {
        await Publicacion.destroy({
            where: {
                id
            }
        })

        return res.json({
            msg: 'Publicación eliminada con éxito!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al eliminar la publicación"
        })
    }

}
*/
module.exports = ctrl;