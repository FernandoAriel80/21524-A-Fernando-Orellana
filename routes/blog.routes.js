

const { Router } = require('express');
const { getPosts, newPost} = require('../controllers/blog.controllers');
const router = Router()

// =====================================
//      RUTAS PARA RENDERIZAR VISTAS
// =====================================

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

// =====================================
//      RUTAS PARA MANEJAR DATOS
// =====================================


router.post('/publicacion', newPost)

router.get('/publicaciones', getPosts)

module.exports = router;