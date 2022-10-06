const {Router} = require('express')
const router = Router()
const {dishesGet, dishesPost, dishesDelete, dishesPut} = require('../controllers/dish.controller')

    router.get('/', dishesGet)

    router.post('/', dishesPost)

    router.put('/', dishesPut)

    router.delete('/', dishesDelete)

module.exports = router;