const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/register', (req, res) => {
    res.render('authentification/register');
});

router.post('/register', authController.registerCoach);

module.exports = router;
