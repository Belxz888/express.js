const {Router, application} = require('express')
const controller = require('./controller')
const router = Router()
//получение данных
router.get('/profile/',controller.getPrizoners)
router.get('/:id',controller.idPrizoner)
//отправка данных 
router.post('/',controller.addPrizoner)
//удаление данных
router.delete('/:id',controller.deletePrizoner)
router.put('/:id',controller.updatePrizoner)
router.get('/profile/:token',controller.createAccount)
module.exports = router