const { getUsers, createUser } = require('../controllers/userController')
const router = require('express').Router()

router.get('/', getUsers)
router.post('/', createUser)

module.exports = router;