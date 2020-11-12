'use strict'

const router = require('express').Router()
const UserController = require('../controllers/usercontroller')
const ProductController = require('../controllers/productcontroller')
const authorization = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')


router.post('/login', UserController.login)
router.use(authentication)
router.get('/products', ProductController.show)
router.post('/products', authorization, ProductController.add)
router.put('/products/:id', authorization, ProductController.edit)
router.delete('/products/:id', authorization, ProductController.delete)


module.exports = router