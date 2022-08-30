const express = require('express');
const router = express.Router();

const { register, forgotpaswword, login, resetpassword } = require('../controllers/auth');

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/forgotpassword").post(forgotpaswword)
router.route("/resetpassword/:resetToken").put(resetpassword)


module.exports = router;