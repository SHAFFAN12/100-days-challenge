const express = require('express');

const router = express.Router();


/**
 * @route Get /api/v1/contact
 * @desc Get logged in data
 * @access private
 */
router.get('/', (req,res) => {
    res.send('Get logged in user');
});

/**
 * @route POST /api/v1/auth
 * @desc log in user
 * @access public
 */
router.post('/', (req, res) => {
    res.send('login user');
  });
  module.exports = router;