

const { Router } = require('express');
const { getPosts, newPost,getUsuario/*, updatePost, deletePost*/} = require('../controllers/blog.controllers');
const router = Router()

// =====================================
//      RUTAS PARA RENDERIZAR VISTAS
// =====================================

router.get('/', (req, res) => {
    res.render('inicio')
})
router.get('/index', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/crea', (req, res) => {
    res.render('crea')
})

// =====================================
//      RUTAS PARA MANEJAR DATOS
// =====================================

router.get('/usuario', getUsuario)

router.post('/publicacion', newPost)

router.get('/publicaciones', getPosts)

/*
router.put('/actualizar/:id', updatePost)

router.delete('/eliminar/:id', deletePost)
*/

module.exports = router;