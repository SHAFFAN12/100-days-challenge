const express = require('express');

const router = express.Router();


/**
 * @route Get /api/v1/contact
 * @desc Get all contacts
 * @access private
 */

router.get('/', (req,res) =>{
    res.send('Get all contacts');
});
/**
 * @route Post /api/v1/contact
 * @desc Create a new contact
 * @access private
 */

router.post('/', (req,res) =>{
    res.send('Create a new contact');
});
/**
 * @route Get /api/v1/contact/:id
 * @desc Update contact by id
 * @access public
 */

router.put('/:id', (req,res) =>{
    res.send('Update contact by id');
});

/**
 * @route Delete /api/v1/contact/:id
 * @desc Delete contact by id
 * @access private
 */
router.delete('/:id', (req, res) => {
    res.send('Delete contact by ID');
  });

module.exports = router;