const express = require('express');
const router = express.Router();
const EmailAction = require('../actions/email.action');


/* GET home page. */
router.post('/', async function (req, res, next) {

    try {
        const {from, message, author} = req.body;
        await EmailAction.sendEmail(message, from, author);
        res.status(200).json({message: "SUCCESS"});
    } catch (e) {
        next(e);
    }

});
module.exports = router;
